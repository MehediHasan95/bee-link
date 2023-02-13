import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/FirebaseConfig";
import useGetLink from "../Hooks/useGetLink";
import SingleLink from "./SingleLink";
import noresult from "../images/noresult.png";
import UpdatePopup from "../Utilities/UpdatePopup";
import DeletePopup from "../Utilities/DeletePopup";

const LinkList = () => {
  const [user] = useAuthState(auth);
  const [getLink] = useGetLink();
  const [findOne, setFindOne] = useState({});
  const [deleteItem, setDeleteItem] = useState("");

  // Delete method
  const handleDeleteItem = (id) => {
    setDeleteItem(id);
  };

  // Update method
  const handleFindOne = (id) => {
    setFindOne(getLink.find((e) => e.id === id));
  };

  return (
    <section>
      {getLink.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getLink.map((e) => (
            <SingleLink
              single={e}
              user={user}
              handleFindOne={handleFindOne}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </div>
      ) : (
        <div>
          <img src={noresult} alt="" className="w-2/6 mx-auto" />
        </div>
      )}
      <UpdatePopup
        updateItem={findOne}
        setUpdateItem={setFindOne}
        user={user}
      />
      <DeletePopup deleteItem={deleteItem} user={user} />
    </section>
  );
};

export default LinkList;
