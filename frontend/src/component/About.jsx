import React, { useState } from "react";
import "./style.css";
const About = () => {
  const [skills, setSkills] = useState({
    skills: [
      { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
      { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
      {
        id: "JavaScript_skill",
        content: "JavaScript",
        porcentage: "90%",
        value: "90",
      },
      { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
      {
        id: "ReactJS_skill",
        content: "ReactJS",
        porcentage: "80%",
        value: "80",
      },
      {
        id: "Python_skill",
        content: "Python",
        porcentage: "75%",
        value: "75",
      },
      {
        id: "VanillaJS_skill",
        content: "VanillaJS",
        porcentage: "85%",
        value: "85",
      },
      {
        id: "Wordpress_skill",
        content: "Wordpress",
        porcentage: "80%",
        value: "80",
      },
    ],
    about_me: [
      {
        id: "about",
        content:
          "I am a self-assured, passionate, and proactive Full-Stack web developer who enjoys being challenged and working on projects that require me to work outside of my comfort zone and knowledge set.",
      },
      {
        id: "first-p-about",
        title: "Professional Skills",
        content:
          "I have 3+ years of professional experience in software development and have worked with a variety of local and remote businesses to develop technological solutions. ",
      },
      {
        id: "second-p-about",
        title: "Personal and Collaborative Projects",
        content:
          "I have worked on a number of internal and external projects with clients and partners ",
      },
      {
        id: "third-p-about",
        title: "Training",
        content:
          "In the year 2019, I took part in a cutting-edge training in Andela/Kigali. I've had the opportunity to work as part of a group and collaborate with other international candidates. In 2021, I took part in Zuri training, which was a remote-based training designed to prepare us for the HGNi8 internship.",
      },
      {
        id: "fourth-p-about",
        title: "Intership",
        content:
          "As part of my final year of undergraduate computer science studies, I interned at Rawbank in 2018. I'm now enrolled in a three-month HNGi8 internship that I'm currently doing remotely.",
      },
      {
        id: "fith-p-about",
        title: "Spoken languages",
        content:
          "I'm fluent three main languages, French (native), English (advanced) and Swahili (native).",
      },
    ],
  });
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {skills.skills.map((skill) => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {skills.about_me.map((content) => {
                      return (
                        <div className="lead" key={content.id}>
                          <p className="title-work">{content.title}</p>
                          <p className="content-work">{content.content}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
