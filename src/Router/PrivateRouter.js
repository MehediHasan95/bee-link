import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <MoonLoader color="#582FF5" size="200" />
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/authentication"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
};

export default PrivateRoute;
