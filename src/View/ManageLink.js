import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { addWebLinkToDB } from "../Database/Database";
import { auth } from "../Firebase/FirebaseConfig";
import LinkList from "./LinkList";

const ManageLink = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const handleManageLink = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const weblink = e.target.weblink.value;
    const time = moment().format("DD/MM/YYYY HH:mm:ss");
    if (name && weblink) {
      const success = addWebLinkToDB(name, weblink, time, user);
      if (success) {
        e.target.reset();
        toast.success("Your link has been successfully added");
      }
    } else {
      toast.error("You cannot leave these fields blank");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className="col-span-1 md:col-span-5">
          {/* <p>Insert your link information:</p> */}
          <form onSubmit={handleManageLink} className="block md:flex">
            {open && (
              <input
                type="text"
                name="name"
                className="p-2 mr-1 mb-2 md:mb-0 rounded-xl outline-none block w-full"
                placeholder="Name"
                // data-aos="flip-left"
              />
            )}
            {open && (
              <input
                type="text"
                name="weblink"
                className="p-2 mr-1 mb-2 md:mb-0 rounded-xl outline-none block w-full"
                placeholder="https://www."
                // data-aos="flip-right"
              />
            )}

            <div className="flex">
              {open && (
                <button
                  onKeyDown={() => handleManageLink()}
                  className="mr-1 text-white bg-[#149D4F] rounded-full p-3 w-full md:flex tooltip tooltip-primary"
                  // data-aos="zoom-in"
                  // data-tip="Add your link"
                >
                  <box-icon
                    name="check-double"
                    color="white"
                    animation="tada-hover"
                  />
                </button>
              )}

              {open && (
                <button
                  onClick={() => setOpen(!open)}
                  className="text-white bg-[#F92D45] rounded-full p-3 w-full md:flex tooltip tooltip-primary"
                  // data-aos="fade-left"
                  // data-tip="Close"
                >
                  <box-icon name="x" color="white" animation="tada-hover" />
                </button>
              )}
            </div>

            {!open && (
              <button
                onClick={() => setOpen(!open)}
                className="bg-slate-800 text-white hover:bg-[#582FF5] rounded-full p-3 flex tooltip tooltip-primary"
                data-aos="fade-left"
                data-tip="Insert your link"
              >
                <box-icon name="plus" color="white" animation="tada-hover" />
              </button>
            )}
          </form>
          <div className="my-3">
            <div className="border border-t-gray-300 border-b-gray-300 py-1 flex justify-between">
              <p>View List</p>

              <p>
                <FontAwesomeIcon icon={faFilter} />
                <select
                  name="sort"
                  className="bg-transparent outline-none text-sm"
                >
                  <option value="top" selected disabled>
                    Filter
                  </option>
                  <option value="top">HIGH</option>
                  <option value="top">LOW</option>
                  <option value="top">MIDIUM</option>
                </select>
              </p>
            </div>
            <div className="my-2">
              <LinkList />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-center text-xl">Summary</h1>
          <div className="text-center">
            <h1 className="text-5xl">25</h1>
            <p>Point</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageLink;
