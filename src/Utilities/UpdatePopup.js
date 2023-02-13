import React, { useState } from "react";
import { updateInformation } from "../Database/Database";

const UpdatePopup = ({ updateItem, user }) => {
  const [edit, setEdit] = useState({});
  const { name, weblink } = updateItem;

  console.log(updateItem, user);

  const handleEditName = (e) => {
    const { name, ...rest } = updateItem;
    setEdit({ name: e, ...rest });
  };
  const handleEditWeblink = (e) => {
    const { weblink, ...rest } = updateItem;
    setEdit({ weblink: e, ...rest });
  };

  const handleCompleteUpdate = (e) => {
    e.preventDefault();
    updateInformation(user, edit);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">Update</h3>
          <form onSubmit={handleCompleteUpdate}>
            <label className="text-sm px-2">Name</label>
            <input
              onChange={(e) => handleEditName(e.target.value)}
              type="text"
              name="name"
              value={edit.name}
              className="p-2 mb-3 border w-full outline-none rounded-md"
              placeholder="Name"
            />
            <label className="text-sm px-2">Web Link</label>
            <input
              onChange={(e) => handleEditWeblink(e.target.value)}
              type="text"
              name="weblink"
              value={edit.weblink}
              className="p-2 border mb-3 w-full outline-none rounded-md"
              placeholder="https://www."
            />

            <button className="p-2 border my-1 w-full outline-none rounded-md bg-[#582FF5] text-white hover:bg-[#149D4F]">
              <label htmlFor="my-modal-4" className="cursor-pointer">
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
