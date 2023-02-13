import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { updateRating } from "../Database/Database";

const SingleLink = ({ single, user, handleDeleteItem, handleFindOne }) => {
  const { id, name, rate, weblink } = single;

  return (
    <div
      className="most-use-list relative bg-white text-slate-800 shadow duration-200 hover:shadow-xl hover:duration-200 rounded-md p-3 m-1 text-center cursor-pointer"
      data-aos="fade-up"
    >
      <h1 className="text-xl">{rate}</h1>
      <a
        data-tip={weblink}
        onClick={() => updateRating(id, rate, user)}
        href={weblink}
        target="_blank"
        className="text-xl font-semibold hover:underline hover:text-[#582FF5] tooltip tooltip-primary"
        rel="noreferrer"
      >
        {name.length > 15 ? name.slice(0, 11) + "..." : name}
      </a>

      <div className="mt-3">
        <label
          htmlFor="my-modal-4"
          onClick={() => handleFindOne(id)}
          title="Edit"
          className="mx-2 cursor-pointer hover:text-amber-600"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </label>

        <label
          htmlFor="my-modal"
          onClick={() => handleDeleteItem(id)}
          title="Delete"
          className="mx-2 cursor-pointer hover:text-rose-600"
        >
          <FontAwesomeIcon icon={faTrash} />
        </label>
      </div>
    </div>
  );
};

export default SingleLink;
