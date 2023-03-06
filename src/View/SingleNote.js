import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const SingleNote = ({ notes, handleDeleteNote }) => {
  const { id, title, note, time } = notes;

  const [readMore, setReadMore] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      setReadMore(note);
    } else {
      setReadMore(note.slice(0, 250));
    }
  }, [note, toggle]);

  return (
    <div className="p-3 bg-white rounded-md shadow duration-200 hover:shadow-xl hover:duration-200 cursor-pointer">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-hanPurple">{title}</h1>
        <div>
          <FontAwesomeIcon
            // onClick={() => handleDeleteNote(id)}
            icon={faPenToSquare}
            className="text-malachite hover:scale-125 duration-300 hover:duration-300 cursor-pointer mx-3"
          />
          <FontAwesomeIcon
            onClick={() => handleDeleteNote(id)}
            icon={faTrash}
            className="text-deepPink hover:scale-125 duration-300 hover:duration-300 cursor-pointer"
          />
        </div>
      </div>
      <pre className="cursor-copy">
        <code className="font-RobotoMono">
          {readMore.length >= 250 ? (
            <>
              {readMore}
              <span
                onClick={() => setToggle(!toggle)}
                className="text-paradisePink font-bold hover:underline mx-2 cursor-pointer"
              >
                {toggle ? "read less" : "read more"}
              </span>
            </>
          ) : (
            readMore
          )}
        </code>
      </pre>
      <small className="text-hanPurple">{time}</small>
    </div>
  );
};

export default SingleNote;
