import React from "react";
import link from "../images/logo.png";
import money from "../images/money.png";
import click from "../images/click.png";

const Features = () => {
  return (
    <div className="my-10 text-center py-20">
      <h1 className="text-3xl font-bold my-3">
        Our <span className="text-hanPurple">Features</span>
      </h1>
      <p>
        We are providing some features which will help our client to make his
        work easier
      </p>
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={link} alt="" className="w-10 mx-auto" />
          <p className="text-xl font-bold mt-3">Save link</p>
          <p>You can save your useful links through it</p>
        </div>

        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={click} alt="" className="w-10 mx-auto" />
          <p className="text-xl font-bold mt-3">Most Click</p>
          <p>You will know which link you use the most</p>
        </div>
        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={money} alt="" className="w-10 mx-auto" />
          <p className="text-xl font-bold mt-3">Make money</p>
          <p>You can earn money by clicking on the link</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
