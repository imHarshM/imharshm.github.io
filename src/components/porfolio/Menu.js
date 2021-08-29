import React from "react";
import Scrollspy from "react-scrollspy";
import useWindowDimensions from "../utils/WindowDimension";

const Menu = ({ handleActive, activeMenu }) => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <div className="top-menu">
        {width > 1023 ? (
          <ul>
            <li
              className={activeMenu === "about" ? "active" : ""}
              onClick={() => handleActive("about")}
            >
              <button>
                <i className="fa fa-user"></i>
                <span className="link">About</span>
              </button>
            </li>
            <li
              className={activeMenu === "resume" ? "active" : ""}
              onClick={() => handleActive("resume")}
            >
              <button>
                <i className="fa fa-list-alt"></i>
                <span className="link">Resume</span>
              </button>
            </li>
            <li
              className={activeMenu === "work" ? "active" : ""}
              onClick={() => handleActive("work")}
            >
              <button>
                <i className="fa fa-paint-brush"></i>
                <span className="link">Work</span>
              </button>
            </li>
            <li
              className={activeMenu === "contact" ? "active" : ""}
              onClick={() => handleActive("contact")}
            >
              <button>
                <i className="fa fa-address-card"></i>
                <span className="link">Contact</span>
              </button>
            </li>
          </ul>
        ) : (
          <Scrollspy
            items={["about-card", "resume-card", "work-card", "contact-card"]}
            currentClassName="active"
          >
            <li>
              <a href="#about-card">
                <i className="fa fa-user"></i>
                <span className="link">About</span>
              </a>
            </li>
            <li>
              <a href="#resume-card">
                <i className="fa fa-list-alt"></i>
                <span className="link">Resume</span>
              </a>
            </li>
            <li>
              <a href="#work-card">
                <i className="fa fa-paint-brush"></i>
                <span className="link">Work</span>
              </a>
            </li>
            <li>
              <a href="#contact-card">
                <i className="fa fa-address-card"></i>
                <span className="link">Contact</span>
              </a>
            </li>
          </Scrollspy>
        )}
      </div>
    </header>
  );
};

export default Menu;
