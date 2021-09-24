import React from "react";
import "./starts.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Mwafrika</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://docs.google.com/document/d/1eN9em5cBDWcuPfEy196o2IoQ3wcczv2kuN5o7ki0lmk/edit?usp=sharing"
                  role="button"
                  target="_blank"
                >
                  View my CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
