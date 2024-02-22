import React, { useEffect, useState } from "react";
import useWindowDimensions from "../utils/WindowDimension";
import moment from "moment";

const About = ({ show }) => {
  const { width } = useWindowDimensions();
  const careerStart = moment("2015-10-01");

  const [currentTime, setCurrentTime] = useState(moment());
  const totalExp = moment.duration(currentTime.diff(careerStart));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="about-card"
    >
      <div className="card-wrap">
        <div className="content about">
          <div className="title m-0">
            <span className="first-word">About</span> Me
          </div>

          <div className="row">
            <div className="col-12 py-4">
              <ul className="text-box">
                <li>
                  A result oriented{" "}
                  <strong>
                    {" "}
                    {totalExp.years()} years {totalExp.months()} months{" "}
                  </strong>
                  {/* <span>{totalExp.days()}d </span> */}
                  of professional experience in
                  <strong> UI/ Front End Web Development</strong> using different types of Web
                  Technologies.
                </li>
                <li>
                  Strong development and hands on experience in
                  <strong>
                    {" "}
                    React JS, Styled Component, Storybook, Angular, HTML5, CSS3, SASS,
                    SCSS,Bootstrap, JavaScript and jQuery.
                  </strong>
                </li>
                <li>
                  Expertise in <strong>debugging and troubleshooting</strong> existing code using
                  Firebug and Developer Tools.
                </li>
                <li>
                  Strong experience with <strong>Cross Browser Compatibility issues</strong> and
                  <strong> Optimization of </strong> for fast loading, including CSS, JavaScript and
                  HTML minify and best practices of
                  <strong> Responsive Web Design (RWD)</strong> using Media Queries.
                </li>
                <li>
                  Working experience in parallax scrolling single page websites and web portals.
                </li>
                <li>
                  Good understanding of <strong>OOPS Concept</strong> and
                  <strong> Database</strong>.
                </li>
                <li>Good understanding of Web application development cycle.</li>
                <li>
                  Well experienced in using version control systems
                  <strong> SVN, GIT, Bit Bucket</strong>.
                </li>
                <li>Independent problem solving ability and easily adopting new technologies.</li>
                <li>
                  Working in Restaurant Management, Supply chain management (SCM), E-Commerce and
                  Healthcare domain.
                </li>
                <li>
                  Areas worked on–
                  <strong>
                    {" "}
                    PSD to HTML, React bootstrap, Material-UI, Email Template, Signature Template,
                    SVG, Audio/Video, Animations, Metatag
                  </strong>
                  .
                </li>
                <li>
                  Focused and goal driven with strong work ethics, continuously striving for
                  improvement coupled with commitment to offer quality work.
                </li>
                <li>Adaptable and quick learner with skills to work under pressure.</li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content services">
          <div className="title">
            <span className="first-word">Working</span> Areas
          </div>
          <div className="row service-items border-line-v">
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-code"></span>
                </div>
                <div className="name">Web Development</div>
                <p>
                  Modern and mobile-ready website that will help you reach all of your marketing, It
                  attracts the right kinds of visitors.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-paint-brush"></span>
                </div>
                <div className="name">Responsive Web Design</div>
                <p>
                  The website respond to the user's behavior and environment based on screen size,
                  platform and orientation, automatically respond to the user's preferences
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-html5"></span>
                </div>
                <div className="name">PSD to HTML</div>
                <p>
                  A web page is designed in a Photoshop Document (PSD) or Zeplin file and then
                  converted to code (using HTML, CSS, and JavaScript).
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-desktop"></span>
                </div>
                <div className="name">Unit Testing/Debugging</div>
                <p>
                  Finding and fixing defects in the early stage of the software development cycle,
                  so it will help to saving much testing time.
                </p>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content fuct">
          <div className="title">
            <span className="first-word">Knowledge</span> About
          </div>

          <div className="row fuct-items">
            <div className="col-xl-3 col-md-3 col-sm-6 col-6 mb-4">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-star"></span>
                </div>
                <div className="name">Agile Model</div>
              </div>
            </div>

            <div className="col-xl-3 col-md-3 col-sm-6 col-6 mb-4">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-github"></span>
                </div>
                <div className="name">Git workflow</div>
              </div>
            </div>

            <div className="col-xl-3 col-md-3 col-sm-6 col-6 mb-4">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-rocket"></span>
                </div>
                <div className="name">Zeplin</div>
              </div>
            </div>

            <div className="col-xl-3 col-md-3 col-sm-6 col-6 mb-4">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-adjust"></span>
                </div>
                <div className="name">VS Code</div>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
