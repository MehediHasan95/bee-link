import React from "react";
import logo from "../images/bee-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent md:absolute">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case text-xl">
          Bee Link
          <img src={logo} alt="logo" className="w-8" />
        </h1>
      </div>

      <ul className="flex px-1">
        <li className="mx-2 cursor-pointer hover:text-[#582FF5] hover:font-bold">
          <p>About</p>
        </li>
        <li className="mx-2 cursor-pointer hover:text-[#582FF5] hover:font-bold">
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
