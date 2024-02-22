import React, { useEffect, useState } from "react";
import useWindowDimensions from "../utils/WindowDimension";
import moment from "moment";

const Resume = ({ show }) => {
  const { width } = useWindowDimensions();
  const currentCompanyJoining = moment("2020-08-20");

  const [currentTime, setCurrentTime] = useState(moment());
  const totalExp = moment.duration(currentTime.diff(currentCompanyJoining));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ExpInfo = [
    {
      current: true,
      duration: "Aug 2020 - Present",
      durCount: `${totalExp.years()}Y ${totalExp.months()}M`,
      position: "Senior Product UI Engineer",
      company: "Calibo",
      companyUrl: "https://www.calibo.com/",
    },
    {
      duration: "Feb 2019 - Aug 2020",
      durCount: "1Y 7M",
      position: "Senior UI Engineer",
      company: "Times Internet",
      companyUrl: "https://timesinternet.in/",
    },
    {
      duration: "Jul 2017 - Feb 2019",
      durCount: "1Y 8M",
      position: "UI Developer",
      company: "Scorg Technologies Pvt Ltd",
      companyUrl: "http://www.scorgtechnologies.com/",
    },
    {
      duration: "Oct 2015 - May 2017",
      durCount: "1Y 8M",
      position: "UI Developer",
      company: "Pasistence Consultancy Services Pvt. Ltd.",
      companyUrl: "https://www.pasistence.com/",
    },
  ];

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="resume-card"
    >
      <div className="card-wrap">
        <div className="content resume">
          <div className="title">
            <div className="first-letter">Resume</div>
          </div>
          <div className="row mx-lg-0 pt-4">
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="resume-title">
                <div className="icon">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="name">Experience</div>
              </div>
              <div className="resume-items px-3">
                {ExpInfo.map((exp) => {
                  return (
                    <div className={`resume-item ${exp.current && "active"}`}>
                      <div className="date">{exp.duration}</div>
                      <div className="duration">
                        <i className="fa fa-circle"></i>
                        {exp.durCount}
                      </div>
                      <div className="name">{exp.position}</div>
                      <div className="company">
                        <a href={exp.companyUrl} target="_blank" rel="noreferrer">
                          {exp.company}
                        </a>
                      </div>
                      <p>{exp.responsibility}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4 pt-4 pt-md-0">
              <div className="resume-title">
                <div className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items px-3">
                <div className="resume-item">
                  <div className="date">2009 - 2013</div>
                  <div className="name">North Maharashtra University</div>
                  <div className="company">Jalgaon, Maharashtra</div>
                  <p>Bachelor's Degree in Computer Science</p>
                </div>
                <div className="resume-item">
                  <div className="date">2008 - 2009</div>
                  <div className="name">HSC</div>
                  <div className="company">Jamner, Maharashtra</div>
                  <p>Completed Higher Secondary Education.</p>
                </div>
                <div className="resume-item">
                  <div className="date">2006 - 2007</div>
                  <div className="name">SSC</div>
                  <div className="company">Tandalwadi, Jalgaon, Maharashtra</div>
                  <p>Completed Secondary School Education.</p>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content skills">
          <div className="title">
            <span className="first-word">My</span> Skills
          </div>

          <div className="row pt-4">
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
              <div className="skills-list circles">
                <div className="skill-title">
                  <span className="icon">
                    <i className="fa fa-code"></i>
                  </span>
                  <span className="name">Coding</span>
                </div>
                <ul className="text-center">
                  <li>
                    <div className="circle-progress p97">
                      <span>97%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">HTML CSS SCSS</div>
                  </li>
                  <li>
                    <div className="circle-progress p85">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">React JS</div>
                  </li>
                  <li>
                    <div className="circle-progress p85">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">JavaScript jQuery</div>
                  </li>
                  <li>
                    <div className="circle-progress p95">
                      <span>95%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">Boostrap 3/4</div>
                  </li>
                  <li>
                    <div className="circle-progress p75">
                      <span>75%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <div className="name">Angular</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 mb-4 pt-4 pt-md-0">
              <div className="skills-list list">
                <div className="skill-title">
                  <span className="icon">
                    <i className="fa fa-laptop"></i>
                  </span>
                  <span className="name">Knowledge</span>
                </div>
                <ul>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Website design and development
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Website hosting
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Unit testing and debugging
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Responsive web design
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Cross browser compatibility
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Modern and mobile-ready
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Graphics and animations
                    </div>
                  </li>
                  <li>
                    <div className="name">
                      <i className="fa fa-code"></i>Search engine optimization
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
