import React from "react";
import "./style.css";
import logob from "../assets/logo-bottom.jpg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="foot-left">
        <img src={logob} alt="" />
        <h3>
          Check out our blog to know more <br /> about what's next for Digital
          Solar →
        </h3>
        <p>
          Get our monthly newsletter <br /> for updates
        </p>
        <input
          type="text"
          placeholder="Email"
          style={{
            backgroundColor: "#2d1f32",
            border: "1px solid white",
            borderRadius: "1px",
            fontSize: "25px",
          }}
        />{" "}
        <button style={{ fontSize: "25px", marginLeft: "-10px" }}> > </button>
        <br /> <br />
        <span>
          © 2022 SundayGrids, All rights reserved <br />
          reach@sundaygrids.com
        </span>
      </div>
      <div className="foot-right">
        <div className="foot-items">
          <ul
            style={{
              listStyle: "none",
              padding: "10px 10px",
              cursor: "pointer",
            }}
          >
            <li>
              <h3 className="foot-head">Company</h3>
            </li>
            <li>About Us</li>
            <li>Privacy policy</li>
            <li>Terms</li>
            <li>Refund</li>
          </ul>
        </div>
        <div className="foot-items">
          <ul
            style={{
              listStyle: "none",
              padding: "10px 10px",
              cursor: "pointer",
            }}
          >
            <li>
              <h3 className="foot-head">Product</h3>
            </li>
            <li>Biscuits</li>
            <li>Demo policy</li>
          </ul>
        </div>
        <div className="foot-items">
          <ul
            style={{
              listStyle: "none",
              padding: "10px 10px",
              cursor: "pointer",
            }}
          >
            <li>
              <h3 className="foot-head">Contact</h3>
            </li>
            <li>Sales</li>
            <li>Be a host</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="foot-items">
          <ul
            style={{
              listStyle: "none",
              padding: "10px 10px",
              cursor: "pointer",
            }}
          >
            <li>
              <h3 className="foot-head">Resources</h3>
            </li>
            <li>FAQ</li>
            <li>Energy Credits</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
