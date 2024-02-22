import React, { useState } from "react";
import useWindowDimensions from "../utils/WindowDimension";

const Contact = ({ show }) => {
  const [contactData, setContactData] = useState({});
  const [submitMsg, setSubmitMsg] = useState({});
  const [validationMsg, setValidationMsg] = useState({});

  const { width } = useWindowDimensions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const validateField = (contactData) => {
    //Email errors
    const errors = {};
    if (!contactData.email) {
      errors.email = "Check Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactData.email)) {
      errors.email = "Invalid email address";
    }
    //Name Errors
    if (!contactData.name || contactData.name.length < 6) {
      errors.name = "Please enter fullname";
    }
    return setValidationMsg(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField(contactData);
    if (contactData.name && contactData.email) {
      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          setContactData({});
          setSubmitMsg({
            text: "Thanks, your message is sent successfully.",
            classText: "mail-success",
          });
          setTimeout(() => {
            setSubmitMsg({});
          }, 3000);
        } else {
          setSubmitMsg({
            text: "Error",
            classText: "mail-error",
          });
        }
      };
      xhr.send(data);
    }
  };

  const socialLinkInfo = [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/imharshm",
    },
    {
      platform: "github",
      url: "https://github.com/imHarshM",
    },
    {
      platform: "jsfiddle",
      url: "https://jsfiddle.net/user/imharshm",
    },
  ];

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="contact-card"
    >
      <div className="card-wrap">
        <div className="content contacts">
          <div className="title">
            <span className="first-word">Get</span> in Touch
          </div>

          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12 py-4">
              <div id="social-test">
                <ul className="social">
                  {socialLinkInfo.map((item, index) => {
                    return (
                      <li key={item} className={item.platform}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <i className={`fa fa-${item.platform}`} aria-hidden="true"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content contacts">
          <div className="title">
            <span className="first-word">Contact</span> Form
          </div>

          <div className="row">
            <div className="col-12 py-4">
              <div className="contact_form">
                {submitMsg && (
                  <div className={submitMsg.classText}>
                    <p>{submitMsg.text}</p>
                  </div>
                )}
                <form
                  id="contact-form"
                  method="post"
                  action="https://formspree.io/f/xaylrepd"
                  noValidate="novalidate"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={contactData.name || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {validationMsg && (
                        <span className="d-block text-danger mt-1">{validationMsg.name}</span>
                      )}
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
                      <div className="group-val">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={contactData.email || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {validationMsg && (
                        <span className="d-block text-danger mt-1">{validationMsg.email}</span>
                      )}
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
                      <div className="group-val">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={contactData.message || ""}
                          onChange={(e) => handleChange(e)}
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <button type="submit">
                      <span className="text">Send Message</span>
                      <span className="arrow"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
