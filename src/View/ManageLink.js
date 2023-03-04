import { faCloudArrowUp, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { addWebLinkToDB } from "../Database/Database";
import LinkList from "./LinkList";
import Summary from "./Summary";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import { GlobalContext } from "../Context/ContextProvider";

const ManageLink = () => {
  const { user, time } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const handleManageLink = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const weblink = e.target.weblink.value;

    if (name && weblink) {
      const success = addWebLinkToDB(name, weblink, time, user);
      if (success) {
        e.target.reset();
        toast.success("Succeeded");
      }
    } else {
      toast.error("Can't keep it empty");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-1 lg:col-span-5 px-2 py-2 lg:py-0 order-2 lg:order-1">
          <form onSubmit={handleManageLink} className="block lg:flex">
            {open && (
              <input
                type="text"
                name="name"
                className="p-2 mr-1 mb-2 lg:mb-0 rounded-xl outline-none block w-full"
                placeholder="Website name"
              />
            )}
            {open && (
              <input
                type="text"
                name="weblink"
                className="p-2 mr-1 mb-2 lg:mb-0 rounded-xl outline-none block w-full"
                placeholder="https://www."
              />
            )}

            <div className="flex">
              {open && (
                <button
                  onKeyDown={() => handleManageLink()}
                  className="mr-1 text-white bg-[#149D4F] rounded-full p-1 lg:p-3 w-full flex justify-center items-center tooltip tooltip-primary tooltip-bottom"
                  data-tip="Done"
                >
                  <CheckIcon className="h-6 w-6" />
                </button>
              )}

              {open && (
                <button
                  onClick={() => setOpen(!open)}
                  className="text-white bg-[#F92D45] rounded-full p-1 lg:p-3 w-full flex justify-center items-center tooltip tooltip-primary tooltip-bottom"
                  data-tip="Close"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              )}
            </div>

            {!open && (
              <button
                onClick={() => setOpen(!open)}
                className="bg-gray-400 text-white hover:bg-hanPurple rounded-md p-3 flex justify-center items-center w-full text-center tooltip tooltip-primary tooltip-bottom mx-auto"
                data-tip="https://"
              >
                <span>Insert link</span>
                <FontAwesomeIcon icon={faCloudArrowUp} className="mx-2" />
              </button>
            )}
          </form>
          <div className="my-3">
            <div className="py-1">
              <hr />
            </div>
            <div className="my-2">
              <LinkList />
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 p-5 rounded-lg bg-white h-min order-1 lg:order-2">
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default ManageLink;
