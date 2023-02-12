import {
  faArrowRight,
  faCoffee,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteItemFromDB } from "../Database/Database";
import { auth } from "../Firebase/FirebaseConfig";
import useGetLink from "../Hooks/useGetLink";
import { DeletePopup } from "../Utilities/Popup";

const LinkList = () => {
  const [user, loading] = useAuthState(auth);
  const [getLink] = useGetLink();

  //   for (const e of getLink) {
  //     const logo = e.weblink;
  //     console.log(logo);
  //   }

  const handleDeleteItem = (id) => {
    deleteItemFromDB(user, id);
  };

  return (
    <section className="link-list-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {getLink.length > 0 ? (
        <>
          {getLink.map((e) => (
            <div
              key={e.id}
              className="link-list bg-white text-slate-800 shadow duration-200 hover:shadow-xl hover:duration-200 rounded-md p-3 m-1 text-center cursor-pointer"
            >
              <a
                href={e.weblink}
                target="_blank"
                className="text-xl font-semibold hover:underline hover:text-[#582FF5]"
                rel="noreferrer"
              >
                {e.name}
              </a>

              <div className="mt-3">
                <button title="Edit" className="mx-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <label
                  htmlFor="my-modal"
                  //   onClick={() => handleDeleteItem(e.id)}
                  title="Delete"
                  className="mx-2 cursor-pointer hover:text-rose-600"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </label>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}

      <DeletePopup />
      {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-center text-xl">
            Are you sure you want to delete this item?
          </h3>

          <div className="flex justify-center">
            <button className="py-2 px-3 mx-2 bg-rose-600 text-white rounded-lg">
              Yes, I'm sure
            </button>
            <button className="py-2 px-3 mx-2 bg-emerald-600 rounded-lg">
              <label htmlFor="my-modal">No, cancel</label>
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default LinkList;
