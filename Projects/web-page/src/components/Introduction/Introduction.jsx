import React from "react";
import "./Introduction.css";
import Image from "../../images/2.png"
const Introduction = () => {

  return (
    <div>
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <h2 className="name-intro">Hello, My name is</h2>
            <h1 className="name">Ozan Eski</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">React</div>
                <div className="title-item">React-Native</div>
                <div className="title-item">JavaScript</div>
                <div className="title-item">Django</div>
                <div className="title-item">Python</div>
              </div>
            </div>
            <div className="intro-description">
              I am a curious front-end developer, interested in learning new
              skills, and skilled at developing solutions.
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="img-bg"></div>
          <img src={Image} className="img" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
