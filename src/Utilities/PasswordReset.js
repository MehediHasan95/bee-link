import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { auth } from "../Firebase/FirebaseConfig";

const PasswordReset = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for the password reset link");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message.slice(15));
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h1 className="text-2xl text-center">Forgot Password</h1>
          <form onSubmit={handlePasswordReset}>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input input-bordered my-3"
                required
              />
            </div>
            <div className="form-control">
              <button
                onKeyDown={() => handlePasswordReset()}
                className="btn btn-primary"
              >
                <label htmlFor="my-modal" className="cursor-pointer">
                  Reset
                </label>
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default PasswordReset;
