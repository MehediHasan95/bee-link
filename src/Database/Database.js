import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";

const addWebLinkToDB = async (name, weblink, time, user) => {
  const collectionName = `webLinkCollection/${user?.uid}/list`;
  const success = await addDoc(collection(db, collectionName), {
    name: name,
    weblink: weblink,
    time: time,
    rate: 0.0,
    click: 0,
  });
  await updateDoc(doc(db, collectionName, success.id), {
    id: success.id,
  });
  return success;
};

// Item rating operation
const updateRating = async (id, rate, click, user) => {
  const collectionName = `webLinkCollection/${user?.uid}/list`;
  await updateDoc(doc(db, collectionName, id), {
    rate: rate + 0.1,
    click: click + 1,
  });
};

//Update information operation
const updateInformation = async (user, updateItem) => {
  const collectionName = `webLinkCollection/${user?.uid}/list`;
  await updateDoc(doc(db, collectionName, updateItem.id), {
    name: updateItem.name,
    weblink: updateItem.weblink,
  });
};

// Item delete operation
const deleteItemFromDB = async (user, id) => {
  await deleteDoc(doc(db, `webLinkCollection/${user?.uid}/list`, id));
};

export { addWebLinkToDB, deleteItemFromDB, updateRating, updateInformation };
