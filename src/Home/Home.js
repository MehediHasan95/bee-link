import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Features from "./Features";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import Header from "./Header";

const Home = () => {
  return (
    <section className="bg-base-200">
      <Navbar />

      <Header />
      <Features />
      <Reviews />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
