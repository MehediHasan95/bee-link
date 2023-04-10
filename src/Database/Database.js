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
    taka: 0.01,
  });
  await updateDoc(doc(db, collectionName, success.id), {
    id: success.id,
  });
  return success;
};

// Item rating operation
const updateRating = async (id, rate, click, taka, user) => {
  const collectionName = `webLinkCollection/${user?.uid}/list`;
  await updateDoc(doc(db, collectionName, id), {
    rate: rate + 0.1,
    click: click + 1,
    taka: taka + 0.1,
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

// Item delete operation
const deleteNoteItemFromDB = async (user, id) => {
  await deleteDoc(doc(db, `notesCollection/${user?.uid}/list`, id));
};

// Save notes
const addNotesToDB = async (title, notes, time, user) => {
  const collectionName = `notesCollection/${user?.uid}/list`;
  const success = await addDoc(collection(db, collectionName), {
    title: title,
    note: notes,
    time: time,
  });
  await updateDoc(doc(db, collectionName, success.id), {
    id: success.id,
  });
  return success;
};

//Update information operation
const updateNotesInformation = async (user, updateItem) => {
  const collectionName = `notesCollection/${user?.uid}/list`;
  await updateDoc(doc(db, collectionName, updateItem.id), {
    title: updateItem.title,
    note: updateItem.note,
  });
};

export {
  addWebLinkToDB,
  deleteItemFromDB,
  updateRating,
  updateInformation,
  addNotesToDB,
  deleteNoteItemFromDB,
  updateNotesInformation,
};
