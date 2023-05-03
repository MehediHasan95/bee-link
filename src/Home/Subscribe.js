import React from "react";

const Subscribe = () => {
  return (
    <section className="my-10 text-center py-20">
      <h1 className="text-3xl font-bold my-3">
        Let's stay in <span className="text-hanPurple">touch!</span>
      </h1>
      <p>
        Join our newsletter, so that we reach out to you with our best
        <br />
        news and offers
      </p>
      <input
        type="email"
        className="p-2 mt-6 border border-hanPurple rounded-md outline-none w-3/5 lg:w-3/12"
        placeholder="Enter your email"
      />
      <button className="p-2 bg-hanPurple hover:bg-[#262C9C] border-none outline-none rounded-md text-white ml-1">
        Subscribe
      </button>
    </section>
  );
};

export default Subscribe;
