import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faDiceFour,
  faSignOut,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../Context/ContextProvider";

const Dashboard = () => {
  const { signOut, navigate } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);

  let block = "block";
  let hidden = "hidden";
  if (toggle) {
    block = "lg:hidden";
    hidden = "block";
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 bg-raisinBlack text-white max-h-screen lg:min-h-screen p-3 lg:sticky lg:top-0">
          <div
            className={`${block} lg:${hidden} flex justify-between items-center px-2`}
          >
            <div>
              {toggle ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setToggle(!toggle)}
                  className="text-paradisePink text-xl cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  onClick={() => setToggle(!toggle)}
                  className="text-white text-xl cursor-pointer"
                />
              )}
            </div>
            <div>
              <button
                onClick={() => signOut()}
                className="w-full text-paradisePink hover:text-hanPurple"
              >
                <FontAwesomeIcon
                  icon={faSignOut}
                  onClick={() => navigate("/")}
                />
              </button>
            </div>
          </div>
          <div className={`${hidden} lg:${block}`}>
            <div className="text-center text-3xl font-Lobster my-5 hidden lg:block">
              <span className="text-[#E7E7E7]">Bee</span>
              <span className="text-hanPurple">Link</span>
              <p className="text-xs">Always ready</p>
            </div>
            <hr className="mb-5 hidden lg:block" />
            <div className="lg:min-h-49 grid content-between">
              <div className="mt-5 lg:mt-0">
                <NavLink to="add">
                  {({ isActive }) => (
                    <p
                      className={
                        isActive
                          ? "px-5 py-3 mb-2 bg-hanPurple text-white rounded-md"
                          : "px-5 py-3 mb-2"
                      }
                    >
                      <FontAwesomeIcon icon={faDiceFour} />
                      <span className="mx-3">Dashboard</span>
                    </p>
                  )}
                </NavLink>
                <NavLink to="notes">
                  {({ isActive }) => (
                    <p
                      className={
                        isActive
                          ? "px-5 py-3 mb-2 bg-hanPurple text-white rounded-md"
                          : "px-5 py-3 mb-2"
                      }
                    >
                      <FontAwesomeIcon icon={faClipboard} />
                      <span className="mx-3">Notes</span>
                    </p>
                  )}
                </NavLink>
              </div>
              <div className="hidden lg:block">
                <button
                  onClick={() => {
                    signOut();
                    navigate("/");
                  }}
                  className="w-full text-paradisePink hover:text-hanPurple"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-5 bg-[#E5E4E9] min-h-screen">
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
