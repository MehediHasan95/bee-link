/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-hanPurple text-white">
      <div>
        <p>
          <span className="text-[#d1d4d1] font-Lobster text-4xl font-bold">
            Bee
          </span>
          <span className="text-[#f0c419] font-Lobster text-4xl font-bold">
            Link
          </span>
          <br />
          <span className="font-RobotoMono">
            Designed & Developed by Mehedi Hasan❤️
          </span>
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
