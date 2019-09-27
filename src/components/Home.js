import React from "react";
// import "../App.css";
import "../assets/css/home.css";
import bgimage from "../assets/images/BG_1.jpg";

export const Home = () => (
  <>
    <img src={bgimage} alt="bgimage" id="bg" />
    <div className="banner">
      <div className="banner-text">
        <h1>Edward Dupre</h1>
        <h1>Full Stack Web Developer</h1>
        <hr />
        <p>
          HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS |
          Express | MongoDB
        </p>

        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="http://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a
            href="http://freecodecamp.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a
            href="http://twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </>
);
