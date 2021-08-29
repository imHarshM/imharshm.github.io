import React, { useEffect, useState } from "react";
import "./assets/css/App.scss";
import Loader from "./components/common/Loader";
import Home from "./components/porfolio/Home";
import Menu from "./components/porfolio/Menu";
import About from "./components/porfolio/About";
import Resume from "./components/porfolio/Resume";
import Work from "./components/porfolio/Work";
import Contact from "./components/porfolio/Contact";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeMenu, setActiveMenu] = useState("about");
  const initialState = () => String(window.localStorage.getItem("theme") || "dark");
  const [theme, setTheme] = useState(initialState);

  const handleChangeTheme = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
    document.documentElement.setAttribute(
      "data-theme",
      window.localStorage.setItem("theme", currentTheme)
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, [theme]);

  const handleActive = (e) => {
    setActiveMenu(e);
    document
      .getElementById(e + "-card")
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div className="page">
      {isLoaded && <Loader />}

      <div
        className="container opened"
        data-animation-in="fadeInLeft"
        data-animation-out="fadeOutLeft"
      >
        <Menu handleActive={handleActive} activeMenu={activeMenu} />
        <Home
          handleActive={handleActive}
          activeMenu={activeMenu}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <About show={activeMenu === "about"} />
        <Resume show={activeMenu === "resume"} />
        <Work show={activeMenu === "work"} />
        <Contact show={activeMenu === "contact"} />
      </div>
    </div>
  );
};

export default App;
