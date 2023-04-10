import React from "react";
import { updateNotesInformation } from "../Database/Database";

const UpdateNotesPopup = ({ updateItem, setUpdateItem, user }) => {
  const handleEditName = (e) => {
    const { title, ...rest } = updateItem;
    setUpdateItem({ title: e, ...rest });
  };
  const handleEditWeblink = (e) => {
    const { note, ...rest } = updateItem;
    setUpdateItem({ note: e, ...rest });
  };

  const handleCompleteUpdate = (e) => {
    e.preventDefault();
    updateNotesInformation(user, updateItem);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">Update</h3>
          <form onSubmit={handleCompleteUpdate}>
            <label className="text-sm px-2">Title</label>
            <input
              onChange={(e) => handleEditName(e.target.value)}
              type="text"
              name="name"
              value={updateItem.title}
              className="p-2 mb-3 border w-full outline-none rounded-md"
              placeholder="Name"
            />
            <label className="text-sm px-2">Notes</label>
            <textarea
              onChange={(e) => handleEditWeblink(e.target.value)}
              type="text"
              name="weblink"
              value={updateItem.note}
              className="p-2 border mb-3 w-full outline-none rounded-md"
              placeholder="https://www."
            />

            <button className="my-1 w-full outline-none rounded-md bg-hanPurple text-white hover:bg-[#149D4F]">
              <label
                htmlFor="my-modal-5"
                className="cursor-pointer inline-block w-full p-2"
              >
                Yes, I'm sure
              </label>
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdateNotesPopup;
