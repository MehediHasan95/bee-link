import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent md:absolute">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case font-Lobster text-xl">
          <span className="text-[#0D2237]">Bee</span>
          <span className="text-[#582FF5]">Link</span>
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
