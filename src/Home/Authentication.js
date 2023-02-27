import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import googleicon from "../images/google.png";
import PasswordReset from "../Utilities/PasswordReset";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (googleUser) {
    navigate(from, { replace: true });
  }

  const handleAuthentication = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (displayName && email) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          if (result) {
            updateProfile(auth.currentUser, {
              displayName: displayName,
            });
            sendEmailVerification(auth.currentUser).then(() => {
              toast.success(
                "A verification link has been sent to your email account"
              );
            }, setToggle(false));
          }
        })
        .catch((error) => {
          toast.error(error.message.slice(15));
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          if (result.user.emailVerified) {
            navigate(from, { replace: true });
          } else {
            toast.error("Please verify your email");
          }
        })
        .catch((error) => {
          toast.error(error.message.slice(15));
        });
    }
  };

  return (
    <section>
      <div className="flex gap-2 justify-center items-center flex-col lg:flex-row min-h-screen bg-base-200">
        <div className="card w-11/12 lg:w-3/6 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAuthentication} className="card-body">
            <p className="text-center text-xl">
              {toggle ? "Create an account" : "Login"}
            </p>
            {toggle && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              {!toggle && (
                <label htmlFor="my-modal" className="label">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              )}
            </div>
            <div className="form-control">
              <button
                onKeyDown={() => handleAuthentication()}
                className="btn btn-primary"
              >
                {toggle ? "Register" : "Login"}
              </button>
            </div>
            <p className="text-center">
              {toggle ? "Already member?" : "Don't have any account?"}{" "}
              <span
                onClick={() => setToggle(!toggle)}
                className="underline hover:text-[#582FF5] cursor-pointer"
              >
                {toggle ? "Login" : "Register"}
              </span>
            </p>
          </form>
        </div>
        <div className="w-11/12 lg:w-3/6 text-center p-2">
          <div className="hidden lg:block">
            <h1 className="text-5xl font-bold">
              {toggle ? "Welcome back!" : "Hello, Friend!"}
            </h1>
            <p className="my-3">
              {toggle
                ? "To keep connected with us please login with your personal info"
                : "Enter your personal information and begin the journey with us"}
            </p>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className="w-10/12 lg:w-3/6 p-2 mt-3 mb-8 flex justify-center items-center  mx-auto bg-white shadow hover:shadow-lg rounded-full hover:bg-[#202020] duration-300 hover:duration-300 hover:text-white"
          >
            <img src={googleicon} alt="" className="w-6 mr-2" />
            <span>Continue with Google</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="block mx-auto text-[#582FF5] font-bold hover:text-[#FD1D46] duration-300 hover:-translate-x-2 hover:duration-300"
          >
            <FontAwesomeIcon icon={faAnglesLeft} /> Go back
          </button>
        </div>
      </div>
      <PasswordReset />
    </section>
  );
};

export default Authentication;
