import React from "react";
import Navbar from "./Navbar";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-3/6">
          <div className="w-full md:w-3/4 mx-auto p-3" data-aos="fade-right">
            <h1 className="text-6xl">Save your link</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              doloribus at vero vitae itaque ullam, soluta dignissimos? Tempora,
              laboriosam odit?
            </p>
            <Link to="/dashboard">
              <button className="bg-[#582FF5] hover:bg-[#262C9C] text-white p-3 my-2 rounded-lg flex items-center">
                {/* Go Dashboard <FontAwesomeIcon icon={faSignIn} /> */}
                <span className="mx-2">Go Dashboard</span>
                <box-icon
                  name="rocket"
                  animation="tada-hover"
                  color="white"
                  size="sm"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/6">
          <div className="carousel w-full" data-aos="fade-left">
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

      <div className="my-10 text-center">
        <h1 className="text-4xl">About</h1>
        <p className="w-11/12 md:w-3/6 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          velit architecto atque reiciendis excepturi maiores vel eos tenetur
          tempora vero.
        </p>
        <box-icon name="rocket"></box-icon>
      </div>
    </section>
  );
};

export default Home;
