import {
  faLink,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { updateRating } from "../Database/Database";

const SingleLink = ({ single, user, handleDeleteItem, handleFindOne }) => {
  const { id, name, rate, click, weblink } = single;

  return (
    <div
      className="most-use-list relative bg-white text-slate-800 shadow duration-200 hover:shadow-xl hover:duration-200 rounded-md p-3 m-1 text-center cursor-pointer "
      data-aos="fade-up"
    >
      <p>
        <a
          data-tip={weblink}
          href={weblink}
          target="_blank"
          rel="noreferrer"
          className="tooltip tooltip-primary"
        >
          <FontAwesomeIcon
            icon={faLink}
            className="text-xl mt-3 text-[#FDA521] hover:scale-125 duration-300 hover:duration-300"
          />
        </a>
      </p>
      <a
        onClick={() => updateRating(id, rate, click, user)}
        href={weblink}
        target="_blank"
        className="text-xl font-semibold hover:underline text-[#582FF5]"
        rel="noreferrer"
      >
        {name.length > 15 ? name.slice(0, 11) + ".." : name}
      </a>
      <p className="text-xs">Rating: {rate.toFixed(2)}</p>

      <div className="mt-3">
        <label
          htmlFor="my-modal-4"
          onClick={() => handleFindOne(id)}
          title="Edit"
          className="mx-2 cursor-pointer text-[#00DD73]"
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="hover:scale-125 duration-300 hover:duration-300"
          />
        </label>

        <label
          htmlFor="my-modal"
          onClick={() => handleDeleteItem(id)}
          title="Delete"
          className="mx-2 cursor-pointer text-[#F52D3A]"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="hover:scale-125 duration-300 hover:duration-300"
          />
        </label>
      </div>
    </div>
  );
};

export default SingleLink;
