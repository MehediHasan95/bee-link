import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent lg:px-10">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case font-Lobster text-2xl lg:text-3xl">
          <span className="text-[#0D2237]">Bee</span>
          <span className="text-[#582FF5]">Link</span>
        </h1>
      </div>

      <ul className="flex px-1">
        <li className="mx-2 cursor-pointer hover:text-[#582FF5] hover:font-bold">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-2 cursor-pointer hover:text-[#582FF5] hover:font-bold">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
