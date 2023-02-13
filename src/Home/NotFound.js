import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import notfound from "../images/notfound.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f7cacd] min-h-screen flex justify-center items-center">
      <div className="text-center">
        <img src={notfound} alt="" className="w-3/4 md:w-2/5 mx-auto" />
        <button
          onClick={() => navigate("/")}
          className="bg-[#582FF5] hover:bg-[#149D4F] text-white px-3 py-2 rounded-md"
        >
          <FontAwesomeIcon icon={faAnglesLeft} className="mr-2" />
          <span>Go Home</span>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
