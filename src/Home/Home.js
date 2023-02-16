import React from "react";
import Navbar from "./Navbar";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import link from "../images/link.png";
import money from "../images/money.png";
import click from "../images/click.png";

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="h-max md:min-h-screen text-slate-800 flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-3/6">
          <div className="w-11/12 md:w-3/4 mx-auto p-3" data-aos="zoom-in">
            <h1 className="font-bold text-3xl md:text-6xl">
              A <span className="text-[#F1B813]">warm</span> <br />
              Welcome to you
            </h1>
            <p className="my-3">
              We can save here the most used websites in our daily life if we
              want, So that later we can access all those websites by entering
              our website.
            </p>
            <Link to="/dashboard/add">
              <button className="bg-[#582FF5] hover:bg-[#262C9C] text-white p-2 md:p-3 my-2 rounded-lg flex items-center">
                <FontAwesomeIcon icon={faRocket} />
                <span className="mx-2">Go Dashboard</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/6">
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

      <div className="my-10 text-center py-5">
        <h1 className="text-3xl font-bold my-3">Our Services</h1>
        <p>
          We are providing some features which will help our client to make his
          work easier
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div
            className="text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
            data-aos="zoom-in"
          >
            <img src={link} alt="" className="w-10 mx-auto" />
            <p className="text-xl font-bold mt-3">Save link</p>
            <p>You can save your useful links through it</p>
          </div>

          <div
            className="text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
            data-aos="zoom-in"
          >
            <img src={click} alt="" className="w-10 mx-auto" />
            <p className="text-xl font-bold mt-3">Most Click</p>
            <p>You will know which link you use the most</p>
          </div>
          <div
            className="text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
            data-aos="zoom-in"
          >
            <img src={money} alt="" className="w-10 mx-auto" />
            <p className="text-xl font-bold mt-3">Make money</p>
            <p>You can earn money by clicking on the link</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
