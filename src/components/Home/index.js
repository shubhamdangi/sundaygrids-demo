import React, { useState } from "react";
import "./style.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import mapImage from "../assets/map.webp";
import geometry from "../assets/geometry.webp";
import mobile from "../assets/mobile.webp";

function Home() {
  const [banner, setBanner] = useState("");
  const [tile1, setTile1] = useState(img1);
  return (
    <div className="home">
      <div className="home-top">
        <div className="img-container">
          <h1>Fully baked idea</h1>
          <img className="home-img" src={tile1} alt="tile" />
        </div>
        <div className="home-list">
          <ul style={{ listStyle: "none" }}>
            <br /> <br />
            <div
              className={tile1 === img1 ? "li-item-active" : "li-item"}
              onClick={() => {
                setTile1(img1);
              }}
            >
              <li>
                <h3 for="1-check">
                  • We install solar systems <br /> &nbsp; on host sites that
                  partner with us
                </h3>
              </li>
            </div>
            <div
              className={tile1 === img2 ? "li-item-active" : "li-item"}
              onClick={() => {
                setTile1(img2);
              }}
            >
              <li>
                <h3>
                  • Users can select the Biscuits <br /> &nbsp; they need from
                  the system
                </h3>
              </li>
            </div>
            <div
              className={tile1 === img3 ? "li-item-active" : "li-item"}
              onClick={() => {
                setTile1(img3);
              }}
            >
              <li>
                <h3>
                  • Host pays for the power and <br /> &nbsp; the credits are
                  passed to users
                </h3>
              </li>
            </div>
            <div
              className={tile1 === img4 ? "li-item-active" : "li-item"}
              onClick={() => {
                setTile1(img4);
              }}
            >
              <li>
                <h3>
                  • Users save up on their power <br /> &nbsp; bill by adding
                  these credits
                </h3>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="home-top-mobile">
        <img src={mobile} alt="banner-mobile" />
      </div>
      <h2>Watch the sun shine</h2>
      <p style={{ fontSize: "20px" }}>
        We have made one of our dashboards open for your reference. <br />{" "}
        &nbsp; Check it out to see how Biscuits work in real-time.
      </p>
      <img
        style={{ width: "60vw", paddingTop: "30px" }}
        src={mapImage}
        className="map-image"
        alt="map-image"
      />
      <button className="btn-ref">Open Reference</button>
      <br /> <br />
      <h1>
        Skip not just the hard stuff, <br /> put your mind at ease too.
      </h1>{" "}
      <br />
      <br />
      <div class="container">
        <div>
          <img src={a} alt="a-img" />
          <h2>Host partner vetting</h2>
          <p>
            We select hosts after <br /> auditing their payment <br /> history &
            power use pattern.
          </p>
        </div>
        <div>
          <img src={b} alt="b-img" />
          <h2>Depreciation based refund</h2>
          <p>
            Get a refund if you want to <br /> unlink from the SundayGrids{" "}
            <br /> platform.
          </p>
        </div>
        <div style={{ paddingBottom: "50px" }}>
          <img src={c} alt="c-img" />
          <h2>Power monitoring</h2>
          <p>
            Find how your Biscuits are <br /> operating in real-time in <br />{" "}
            your dashboard.
          </p>
        </div>
        <div>
          <img src={d} alt="d-img" />

          <h2>Host partner vetting</h2>

          <p>
            We select hosts after <br /> auditing their payment <br /> history &
            power use pattern.
          </p>
        </div>
        <div>
          <img src={e} alt="e-img" />
          <h2>Depreciation based refund</h2>{" "}
          <p>
            Get a refund if you want to <br /> unlink from the SundayGrids{" "}
            <br /> platform.
          </p>
        </div>
        <div>
          <img src={f} alt="f-img" />

          <h2>Power monitoring</h2>
          <p>
            Find how your Biscuits are <br /> operating in real-time in <br />{" "}
            your dashboard.
          </p>
        </div>
      </div>
      <br />
      <div className="signup">
        <div className="geo-img">
          <img src={geometry} alt="geometry" />
        </div>
        <div className="geo-desc">
          <h2>
            Sign up and we'll do the <br /> heavy-lifting
          </h2>
          <p>
            Now you can skip all the tedious planning <br /> and installation as
            well as the headache of <br /> long term maintenance and jump
            straight <br /> into generating energy credits from day <br /> one.
          </p>
          <span className="msg-geo">
            New project coming soon! &nbsp; &nbsp;
            <button className="btn-geo">Notify Me</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
