import moment from "moment/moment";
import React, { createContext } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import useGetLink from "../Hooks/useGetLink";
import useGetNotes from "../Hooks/useGetNotes";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [getLink] = useGetLink();
  const [getNotes] = useGetNotes();

  const time = moment().format("DD/MM/YYYY HH:mm:ss");
  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const shares = {
    getLink,
    getNotes,
    user,
    loading,
    signOut,
    navigate,
    location,
    from,
    time,
  };
  return (
    <GlobalContext.Provider value={shares}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
