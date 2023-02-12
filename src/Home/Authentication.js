import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  } else if (error) {
    toast.error("Popup closed by user");
  }

  const handleAuthentication = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
  };

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-2/5">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              onClick={() => signInWithGoogle()}
              className="text-center flex items-center"
            >
              <box-icon type="logo" name="google" />
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAuthentication} className="card-body">
              {toggle && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {!toggle && (
                  <label className="label">
                    <a href="/#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                )}
              </div>
              <div className="form-control">
                <button className="btn btn-primary">
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
        </div>
      </div>
      <button>Go to Homapage</button>
    </section>
  );
};

export default Authentication;
