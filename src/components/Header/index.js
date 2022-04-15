import React from "react";
import "./style.css";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#">How it Works</a>
          <a href="#">Using Credits</a>
          <a href="#">Projects</a>
          <a href="#">About Us</a>
          <button className="btn-sign">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
