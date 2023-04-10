import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteNoteItemFromDB } from "../Database/Database";

const DeleteNotesPopup = ({ deleteItem, user }) => {
  const confirmDelete = async (confirm) => {
    if (confirm) {
      deleteNoteItemFromDB(user, deleteItem.id);
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-5xl text-amber-300"
          />

          <h3 className="text-xl my-5">
            Are you sure? Want to delete this item
          </h3>
          <div className="flex justify-center">
            <button
              onClick={() => confirmDelete(true)}
              className="mx-2 bg-[#E74F5B] hover:bg-[#F52D3A] text-white rounded-lg"
            >
              <label
                htmlFor="my-modal"
                className="cursor-pointer inline-block py-2 px-3"
              >
                Yes, I'm sure
              </label>
            </button>
            <button className="mx-2 border border-gray-500 hover:bg-malachite hover:border-malachite hover:text-white rounded-lg">
              <label
                htmlFor="my-modal"
                className="cursor-pointer inline-block py-2 px-3"
              >
                No, cancel
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteNotesPopup;
