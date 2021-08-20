import React, { useState, useEffect } from "react";
import imageOverlay from "../img/earth.jpg";
import axios from "axios";
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";
import { Toast, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const diffToast = (e) => {
    e.preventDefault();
    toast("Login Successfully!", {
      position: "top-center",
    });
  };

  const handleChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    const response = await axios
      .post("https://portofolio-hngi8.herokuapp.com/send", contact, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(contact),
      })
      .then(async (res) => {
        const resData = await res.data;
        console.log(resData);
        if (resData.status === "success") {
          toast("Message Sent Successfully!", {
            position: "top-center",
          });
        } else if (resData.status === "fail") {
          toast.error("Message Sending Failed!", {
            position: "top-center",
          });
        }
      })
      .then(() => {
        setContact({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      {/* <form action="#" method="POST" className="contactForm"> */}
                      <form
                        action="https://portofolio-hngi8.herokuapp.com"
                        method="POST"
                        className="contactForm"
                      >
                        <ToastContainer auto-close={2000} />

                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={contact.name}
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={contact.email}
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                value={contact.subject}
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                value={contact.message}
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                onChange={handleChange}
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              onClick={handleSubmit}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <li style={{ margin: "20px" }}>
                          <a href="" target="_blank" rel="noopener noreferrer">
                            <Twitter color="royalblue" size={40} />
                          </a>
                        </li>
                        <li style={{ margin: "20px" }}>
                          <a
                            href="https://github.com/mwafrika"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github color="royalblue" size={40} />
                          </a>
                        </li>
                        <li style={{ margin: "20px" }}>
                          <a href="" target="_blank" rel="noopener noreferrer">
                            <Linkedin color="royalblue" size={40} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
