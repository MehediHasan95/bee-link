import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../Firebase/FirebaseConfig";

const DeletePopup = ({ deleteItem, user }) => {
  const confirmDelete = async (confirm) => {
    if (confirm) {
      await deleteDoc(
        doc(db, `webLinkCollection/${user?.uid}/list`, deleteItem)
      );
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
          <h3 className="text-base mb-5 mt-3">
            Are you sure you want to delete this item?
          </h3>

          <div className="flex justify-center">
            <button
              onClick={() => confirmDelete(true)}
              className="py-2 px-3 mx-2 bg-[#E74F5B] hover:bg-[#F52D3A] text-white rounded-lg"
            >
              <label htmlFor="my-modal" className="cursor-pointer">
                Yes, I'm sure
              </label>
            </button>
            <button className="py-2 px-3 mx-2 border border-gray-500 hover:bg-[#00DD73] hover:border-[#00DD73] hover:text-white rounded-lg">
              <label htmlFor="my-modal" className="cursor-pointer">
                No, cancel
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
