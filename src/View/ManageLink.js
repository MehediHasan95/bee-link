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
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const time = moment().format("DD/MM/YYYY, h:mm:ss a");

  const handleManageLink = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const weblink = e.target.weblink.value;
    if (name && weblink) {
      const success = addWebLinkToDB(name, weblink, time, user);
      if (success) {
        e.target.reset();
        toast.success("Your link has been successfully added");
        // setOpen(!open);
      }
    } else {
      toast.error("You cannot leave these fields blank");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className="col-span-1 md:col-span-5">
          <p>Insert your link information:</p>
          <form onSubmit={handleManageLink} className="flex">
            {open && (
              <input
                type="text"
                name="name"
                className="p-2 mr-1 rounded-xl outline-none flex-grow"
                placeholder="Name"
              />
            )}
            {open && (
              <input
                type="text"
                name="weblink"
                className="p-2 mr-1 rounded-xl outline-none flex-grow"
                placeholder="https://www."
              />
            )}
            {open && (
              <button
                onKeyDown={() => handleManageLink()}
                className="bg-slate-800 text-white hover:bg-[#149D4F] rounded-full p-3 flex"
              >
                <box-icon
                  name="check-double"
                  color="white"
                  animation="tada-hover"
                />
              </button>
            )}

            {!open && (
              <button
                onClick={() => setOpen(!open)}
                className="bg-slate-800 text-white hover:bg-[#F92D45] rounded-full p-3 flex"
              >
                <box-icon name="plus" color="white" animation="tada-hover" />
              </button>
            )}
          </form>
          <div className="my-3">
            <div className="border border-t-gray-300 border-b-gray-300 py-1 flex justify-between">
              <p>Link List</p>

              <p className="font-light">
                <FontAwesomeIcon icon={faFilter} />
                <select name="sort" className="bg-transparent">
                  <option value="top" selected>
                    Filter
                  </option>
                  <option value="top">Top</option>
                  <option value="top">Top</option>
                </select>
              </p>
            </div>
            <LinkList />
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
