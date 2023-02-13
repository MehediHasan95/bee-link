import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/FirebaseConfig";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  console.log(user);
  return (
    <section>
      <div
        className="grid grid-cols-8 md:grid-cols-6 rounded-md overflow-hidden border"
        data-aos="fade-left"
      >
        <div className="col-span-3 md:col-span-1 h-36 md:h-48 overflow-hidden">
          <img
            src={!loading && user?.photoURL}
            alt="profile_picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-5 md:col-span-5 h-36 md:h-48 p-3 text-white bg-gray-800">
          <h1 className="text-3xl md:text-5xl font-bold">
            {!loading && user?.displayName}
          </h1>
          <p className="text-sm md:text-base">
            <FontAwesomeIcon icon={faEnvelope} /> {!loading && user?.email}
          </p>
        </div>
      </div>
      <div className="p-2" data-aos="fade-up">
        <p>Profile Information:</p>
        <hr className="border border-gray-300" />
      </div>
    </section>
  );
};

export default Profile;
