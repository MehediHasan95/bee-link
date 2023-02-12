import { faPlus, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import logo from "../images/bee-logo.png";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 bg-[#582FF5] text-white max-h-screen md:min-h-screen p-3">
          <div>
            <img src={logo} alt="logo" className="w-20 mx-auto" />
            <h1 className="text-center text-2xl">BeeLink</h1>
          </div>
          <hr className="my-3 hidden md:block" />
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? "text-[#FEA31B]" : "text-white"
            }
          >
            <p className="px-3 py-2">
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </p>
          </NavLink>
          <NavLink
            to="add"
            className={({ isActive }) =>
              isActive ? "text-green-200" : "text-white"
            }
          >
            <p className="px-3 py-2">
              <FontAwesomeIcon icon={faPlus} /> <span>Add Link</span>
            </p>
          </NavLink>
        </div>
        <div className="col-span-1 md:col-span-5 bg-[#E5E4E9] min-h-screen">
          <div className="p-3 bg-white flex justify-between">
            <h1 className="text-base md:text-xl">
              Welcome to{" "}
              <span className="text-[#582FF5] font-bold">
                {!loading && user.displayName},
              </span>
            </h1>
            <button
              onClick={() => signOut()}
              className="duration-300 hover:text-[#F92D45] hover:-translate-x-2 hover:duration-300"
            >
              SignOut <FontAwesomeIcon icon={faSignOut} />
            </button>
          </div>
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;