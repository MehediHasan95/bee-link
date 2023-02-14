import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/FirebaseConfig";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const { displayName, email, emailVerified, metadata, isAnonymous, uid } =
    user;

  return (
    <section>
      <div
        className="grid grid-cols-8 md:grid-cols-6 rounded-md overflow-hidden border"
        data-aos="fade-left"
      >
        <div className="col-span-3 md:col-span-1 h-36 md:h-48 overflow-hidden">
          <img
            src={!loading && user?.photoURL}
            alt="no_image"
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
        <div className="flex">
          <div className="w-2/5 md:w-1/5 px-2 text-sm md:text-base">
            <p className="flex justify-between items-center">
              <span>Full Name</span>
              <span>:</span>
            </p>
            <p className="flex justify-between items-center">
              <span>E-mail Address</span>
              <span>:</span>
            </p>
            <p className="flex justify-between items-center">
              <span>E-mail Verified</span>
              <span>:</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Anonymous</span>
              <span>:</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Account Create</span>
              <span>:</span>
            </p>
            <p className="flex justify-between items-center">
              <span>User ID</span>
              <span>:</span>
            </p>
          </div>
          <div className="w-4/5 px-2 text-sm md:text-base">
            <p>{displayName}</p>
            <p>{email}</p>
            <p>{emailVerified ? "Yes" : "No"}</p>
            <p>{isAnonymous ? "Yes" : "No"}</p>
            <p>{metadata?.creationTime}</p>
            <p>{uid}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
