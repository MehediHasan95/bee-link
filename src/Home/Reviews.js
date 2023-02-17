import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reviews = () => {
  return (
    <section className="my-10 text-center py-5">
      <h1 className="text-3xl font-bold">
        Check Out <br /> Recent Reviews
      </h1>
      <div className="mt-6 flex justify-center items-center flex-col md:flex-row">
        <div
          className="bg-white text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="flip-left"
        >
          <h1 className="text-xl font-bold">Omi Hasan</h1>
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
          className="bg-white text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="flip-left"
        >
          <h1 className="text-xl font-bold">Mehedi Hasan</h1>
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
          className="bg-white text-center w-11/12 md:w-3/12 py-10 m-3 rounded-md shadow-lg"
          data-aos="flip-left"
        >
          <h1 className="text-xl font-bold">Wahid Arman</h1>
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
