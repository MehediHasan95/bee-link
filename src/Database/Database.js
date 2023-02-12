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
  });
  await updateDoc(doc(db, collectionName, success.id), {
    id: success.id,
  });
  return success;
};

const deleteItemFromDB = async (user, id) => {
  await deleteDoc(doc(db, `webLinkCollection/${user?.uid}/list`, id));
};

export { addWebLinkToDB, deleteItemFromDB };
