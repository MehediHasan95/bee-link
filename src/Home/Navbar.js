import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="navbar bg-transparent lg:px-10">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case font-Lobster text-2xl lg:text-3xl">
          <span className="text-[#0D2237]">Bee</span>
          <span className="text-hanPurple">Link</span>
        </h1>
      </div>

      <ul className="flex px-1">
        <li className="mx-2 cursor-pointer hover:text-hanPurple hover:font-bold">
          {!loading && user ? (
            <p>{user.displayName}</p>
          ) : (
            <Link to="/authentication">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
