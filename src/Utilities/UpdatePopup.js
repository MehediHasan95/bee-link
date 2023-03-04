import React from "react";
import { updateInformation } from "../Database/Database";

const UpdatePopup = ({ updateItem, setUpdateItem, user }) => {
  const handleEditName = (e) => {
    const { name, ...rest } = updateItem;
    setUpdateItem({ name: e, ...rest });
  };
  const handleEditWeblink = (e) => {
    const { weblink, ...rest } = updateItem;
    setUpdateItem({ weblink: e, ...rest });
  };

  const handleCompleteUpdate = (e) => {
    e.preventDefault();
    updateInformation(user, updateItem);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">Update</h3>
          <form onSubmit={handleCompleteUpdate}>
            <label className="text-sm px-2">Name</label>
            <input
              onChange={(e) => handleEditName(e.target.value)}
              type="text"
              name="name"
              value={updateItem.name}
              className="p-2 mb-3 border w-full outline-none rounded-md"
              placeholder="Name"
            />
            <label className="text-sm px-2">Web Link</label>
            <input
              onChange={(e) => handleEditWeblink(e.target.value)}
              type="text"
              name="weblink"
              value={updateItem.weblink}
              className="p-2 border mb-3 w-full outline-none rounded-md"
              placeholder="https://www."
            />

            <button className="p-2 border my-1 w-full outline-none rounded-md bg-hanPurple text-white hover:bg-[#149D4F]">
              <label htmlFor="my-modal-5" className="cursor-pointer">
                Yes, I'm sure
              </label>
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdatePopup;
