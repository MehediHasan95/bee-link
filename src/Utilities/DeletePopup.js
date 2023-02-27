import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../Firebase/FirebaseConfig";

const DeletePopup = ({ deleteItem, user }) => {
  const { rate, taka } = deleteItem;

  const confirmDelete = async (confirm) => {
    if (confirm) {
      await deleteDoc(
        doc(db, `webLinkCollection/${user?.uid}/list`, deleteItem.id)
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
          <p className="my-5">
            Also you will lose (
            <span className="text-[#582FF5] font-bold">{taka?.toFixed(2)}</span>
            ) tk and (
            <span className="text-[#582FF5] font-bold">{rate?.toFixed(2)}</span>
            ) rating
          </p>
          <h3 className="text-base mb-5">Are you sure?</h3>
          <div className="flex justify-center">
            <button
              onClick={() => confirmDelete(true)}
              className="mx-2 bg-[#E74F5B] hover:bg-[#F52D3A] text-white rounded-lg"
            >
              <label htmlFor="my-modal" className="cursor-pointer">
                <p className="py-2 px-3">Yes, I'm sure</p>
              </label>
            </button>
            <button className="mx-2 border border-gray-500 hover:bg-[#00DD73] hover:border-[#00DD73] hover:text-white rounded-lg">
              <label htmlFor="my-modal" className="cursor-pointer">
                <p className="py-2 px-3">No, cancel</p>
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
