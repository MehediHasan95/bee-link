import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/FirebaseConfig";
import noImage from "../images/noimage.jpg";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const { displayName, email, photoURL, metadata } = user;

  return (
    <section>
      <div className="demo-bg py-4 text-white">
        {!loading && photoURL ? (
          <img
            src={photoURL}
            alt="no_image"
            className="w-3/12 md:w-1/6 mx-auto rounded-full"
          />
        ) : (
          <img
            src={noImage}
            alt="no_image"
            className="w-3/12 md:w-1/6 mx-auto rounded-full border border-gray-400"
          />
        )}

        <div className="text-center mt-2">
          <h1 className="text-xl md:text-3xl font-semibold">
            {!loading && displayName}
          </h1>
          <p>{!loading && email}</p>
          <p>{!loading && metadata?.creationTime}(Since)</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
