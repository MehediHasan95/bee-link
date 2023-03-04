import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/FirebaseConfig";

const useGetNotes = () => {
  const [user] = useAuthState(auth);
  const [getNotes, setGetNotes] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, `notesCollection/${user?.uid}/list`),
        orderBy("time", "desc")
      ),
      (snapshot) => {
        setGetNotes(snapshot.docs.map((e) => e.data()));
      }
    );
  }, [user?.uid]);
  return [getNotes, setGetNotes];
};

export default useGetNotes;
