import React from "react";
import { ProfilePic } from "../utils/Images";

const Home = ({ handleActive, activeMenu, theme, handleChangeTheme }) => {
  return (
    <div className="card-started" id="home-card">
      <div className="profile">
        <div className="slide">
          <a
            className="btn theme-btn"
            href="#/"
            rel="noreferrer"
            onClick={() => handleChangeTheme()}
          >
            <i className={`fa fa-${theme === "light" ? "moon-o" : "sun-o"}`}></i>
          </a>
        </div>

        <div className="image">
          <img src={ProfilePic} alt="profile" />
        </div>
        <div className="title">Harshal H. Mahajan</div>
        <div className="subtitle">UI Developer</div>

        <div className="social">
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/imharshm">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://github.com/imharshm">
            <i className="fa fa-github"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://jsfiddle.net/user/imharshm">
            <i className="fa fa-jsfiddle"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.freelancer.com/u/harshalhmahajan">
            <i className="fa fa-foursquare"></i>
          </a>
        </div>

        <div className="lnks">
          <a
            href="https://docs.google.com/document/d/1yUMelEDuLVdSiMQRHqZKihRmbs5nx8SH_sMB3MkakFo/edit?usp=drivesdk"
            className="lnk"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text">Download CV </span>
            <i className="fa fa-download"></i>
          </a>
          <a
            href="#/"
            onClick={() => handleActive("contact")}
            className={`lnk discover ${activeMenu === "contact" ? "active" : ""}`}
          >
            <span className="text">Contact Me</span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
