import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/FirebaseConfig";

const useGetLink = () => {
  const [user] = useAuthState(auth);
  const [getLink, setGetLink] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, `webLinkCollection/${user?.uid}/list`),
        orderBy("time", "desc")
      ),
      (snapshot) => {
        setGetLink(snapshot.docs.map((e) => e.data()));
      }
    );
  }, [user?.uid]);
  return [getLink, setGetLink];
};

export default useGetLink;
