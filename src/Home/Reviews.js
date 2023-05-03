import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reviews = () => {
  return (
    <section className="my-10 text-center py-20">
      <h1 className="text-3xl font-bold my-3">
        Our <span className="text-hanPurple">Reviews</span>
      </h1>
      <p>Check out what our clients say about us</p>
      <div className="mt-6 flex justify-center items-center flex-col lg:flex-row">
        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="text-xl font-bold mb-5">Alexis Morton</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            ratione illo dignissimos modi facilis omnis accusantium dolorem
            debitis dolor rem.
          </p>
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
        </div>
        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="text-xl font-bold mb-5">Bentley Covington</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            ratione illo dignissimos modi facilis omnis accusantium dolorem
            debitis dolor rem.
          </p>
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
        </div>
        <div
          className="bg-white text-center w-11/12 lg:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="text-xl font-bold mb-5">Jessica Lucas</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            ratione illo dignissimos modi facilis omnis accusantium dolorem
            debitis dolor rem.
          </p>
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
          <FontAwesomeIcon icon={faStar} className="text-[#FFBC10]" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
