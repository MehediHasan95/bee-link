import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faList, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 bg-[#202020] text-white max-h-screen lg:min-h-screen p-3 lg:sticky lg:top-0">
          <div className="text-center text-3xl font-Lobster my-5">
            <span className="text-[#E7E7E7]">Bee</span>
            <span className="text-[#582FF5]">Link</span>
            <p className="text-xs">Always ready</p>
          </div>
          <hr className="mb-5 hidden lg:block" />
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "bg-[#582FF5] text-white my-2 flex rounded-md"
                : "text-white"
            }
          >
            <button className="px-5 my-2 w-full flex items-center outline-none">
              <FontAwesomeIcon icon={faUser} />
              <span className="mx-3">Profile</span>
            </button>
          </NavLink>

          <NavLink
            to="add"
            className={({ isActive }) =>
              isActive
                ? "bg-[#582FF5] text-white my-2 flex rounded-md"
                : "text-white"
            }
          >
            <button className="px-5 my-2 w-full flex items-center outline-none">
              <FontAwesomeIcon icon={faList} />
              <span className="mx-3">Save Link</span>
            </button>
          </NavLink>
          <NavLink
            to="notes"
            className={({ isActive }) =>
              isActive
                ? "bg-[#582FF5] text-white my-2 flex rounded-md"
                : "text-white"
            }
          >
            <button className="px-5 my-2 w-full flex items-center outline-none">
              <FontAwesomeIcon icon={faClipboard} />
              <span className="mx-3">Notes</span>
            </button>
          </NavLink>
        </div>
        <div className="col-span-1 lg:col-span-5 bg-[#E5E4E9] min-h-screen">
          <div className="p-3 bg-white flex justify-between">
            <h1 className="text-base lg:text-xl">
              Welcome to{" "}
              <span className="text-[#582FF5] font-bold">
                {!loading && user.displayName}
              </span>
            </h1>
            <button
              onClick={() => signOut()}
              className="duration-300 hover:text-[#F92D45] hover:-translate-x-1 hover:duration-300 tooltip tooltip-left"
              data-tip="Sign Out"
            >
              <FontAwesomeIcon icon={faSignOut} onClick={() => navigate("/")} />
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
