import React from "react";
import { Work1, Work2, Work3, Work4, Work5, Work6 } from "../utils/Images";
import useWindowDimensions from "../utils/WindowDimension";

const Work = ({ show }) => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="work-card"
    >
      <div className="card-wrap">
        <div className="content work">
          <div className="title">
            <span className="first-word">Recent</span> Works
          </div>

          <div className="row pt-4">
            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a href="https://pos.torqus.com" target="_blank" rel="noreferrer">
                    <img src={Work1} alt="work-1" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>2`0</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a href="https://pos.torqus.com" className="name">
                    POS by Torqus System Pvt Ltd
                  </a>
                  <div className="category">
                    Torqus Restaurant POS integrates one of the most advanced security technologies
                    clubbed with innovative programming to provide you with smart user access. It
                    allows you to selectively restrict and grant access to your workforce, from
                    stewards to managers to co-owners. Apart from this, it is also possible to
                    customize the configuration of every button as per the needs of the user.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a href="https://scm.torqus.com/" target="_blank" rel="noreferrer">
                    <img src={Work2} alt="work-2" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>20</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a href="https://scm.torqus.com/" className="name">
                    SCM by Torqus System Pvt Ltd
                  </a>
                  <div className="category">
                    The Restaurant SCM Software integrates one of the most advanced security
                    technologies clubbed with innovative networking capabilities to offer smart user
                    access. By providing you with a virtual controller for your restaurant chain, it
                    allows you to selectively restrict and grant access to your workforce depending
                    on their role and designation, from stewards to managers to co-owners. Apart
                    from this, it is also possible to customise the configuration of every button as
                    per the needs of the user.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a href="https://worldhelpgroup.org/" target="_blank" rel="noreferrer">
                    <img src={Work3} alt="work-3" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>20</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a href="https://worldhelpgroup.org/" className="name">
                    World Help Group
                  </a>
                  <div className="category">
                    World Help Group is a platform where we provide the needy across the globe with
                    essential requirements which include FOOD &amp; Essentials. They do this by
                    collaborating with vendors &amp; providing them necessary support for efficient
                    &amp; faster food support to fight Hunger.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a href="http://www.scorgtechnologies.com/" target="_blank" rel="noreferrer">
                    <img src={Work4} alt="work-4" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>19</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a href="http://www.scorgtechnologies.com/" className="name">
                    Company Website
                  </a>
                  <div className="category">
                    SCORG Technologies - A global software development and technology services
                    company with deep domain experience in multiple industry verticals. We have
                    acquired expert technological competency in Agile &amp; DevOps model for
                    web-based and mobile application development for hybrid and native framework.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a
                    href="https://drrescribe.com/application/app.html#/access/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Work5} alt="work-5" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>19</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a
                    href="https://drrescribe.com/application/app.html#/access/login"
                    className="name"
                  >
                    EMR by Scorg Technology
                  </a>
                  <div className="category">
                    SCORG EMR is a comprehensive practice management solution suite – developed with
                    cutting edge technology – to enable healthcare providers build their practice on
                    a virtual platform. An integrated and scalable software solution, the practice
                    management software streamlines Patient Life Cycle Management right from
                    appointment to discharge.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
              <div className="box-item">
                <div className="image">
                  <a href="http://vedproductions.com/" target="_blank" rel="noreferrer">
                    <img src={Work6} alt="work-6" />
                    <span className="info">
                      <span className="fa fa-document-text"></span>
                    </span>
                    {/* <!-- <span className="date"><strong>20</strong>Jun</span> --> */}
                  </a>
                </div>
                <div className="desc">
                  <a href="http://vedproductions.com/" className="name">
                    Photography Portfolio
                  </a>
                  <div className="category">
                    Vedproductions is specialising in cinematography, Fashion, wedding, commercial,
                    All Kind of Photograph, Post production work.
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
