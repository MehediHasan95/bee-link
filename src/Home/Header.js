import React from "react";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="text-slate-800 flex justify-center items-center flex-col lg:flex-row">
      <div className="w-full lg:w-3/6">
        <div className="w-11/12 lg:w-3/4 mx-auto p-3" data-aos="zoom-in">
          <h1 className="font-bold text-3xl lg:text-6xl">
            A <span className="text-[#F1B813]">warm</span> <br />
            Welcome to you
          </h1>
          <p className="my-3">
            We can save here the most used websites in our daily life if we
            want, So that later we can access all those websites by entering our
            website.
          </p>
          <Link to="/dashboard/add">
            <button className="bg-hanPurple hover:bg-[#262C9C] text-white p-2 lg:p-3 my-2 rounded-lg flex items-center">
              <FontAwesomeIcon icon={faRocket} />
              <span className="mx-2">Go Dashboard</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-3/6">
        <div className="carousel w-full" data-aos="zoom-in">
          <div id="item1" className="carousel-item w-full">
            <img src={slide1} alt="" className="w-3/4 mx-auto" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={slide2} alt="" className="w-3/4 mx-auto" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={slide3} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
