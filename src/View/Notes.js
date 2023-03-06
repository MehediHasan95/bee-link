import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { GlobalContext } from "../Context/ContextProvider";
import { addNotesToDB, deleteNoteItemFromDB } from "../Database/Database";
import SingleNote from "./SingleNote";
import noresult from "../images/noresult.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Notes = () => {
  const { user, time, getNotes } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);

  const handleNotes = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const note = e.target.note.value;
    const success = addNotesToDB(title, note, time, user);
    if (success) {
      e.target.reset();
      toast.success("Succeeded");
    } else {
      toast.error("Can't keep it empty");
    }
  };

  const handleDeleteNote = (id) => {
    deleteNoteItemFromDB(user, id);
  };

  return (
    <section>
      <form onSubmit={handleNotes}>
        {toggle && (
          <>
            <input
              type="text"
              name="title"
              className="p-3 mb-2 rounded-xl outline-none block w-full"
              placeholder="Title"
              required
            />
            <pre>
              <code className="font-RobotoMono">
                <textarea
                  name="note"
                  rows="3"
                  className="p-3 mb-2 rounded-xl outline-none block w-full"
                  placeholder="Write your note..."
                  required
                ></textarea>
              </code>
            </pre>
            <button className="bg-hanPurple text-white p-2 rounded-xl outline-none block w-full">
              Submit
            </button>
          </>
        )}
        {!toggle && (
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-gray-400 hover:bg-hanPurple text-white p-2 rounded-xl outline-none block w-full"
          >
            <span>Save Note</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="mx-2" />
          </button>
        )}
      </form>

      <div>
        {getNotes.length > 0 ? (
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 py-3">
            {getNotes.map((note) => (
              <SingleNote
                key={note.id}
                notes={note}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
          </div>
        ) : (
          <div>
            <img src={noresult} alt="" className="w-2/6 mx-auto" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Notes;
