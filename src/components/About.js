import React, { Component } from "react";
import "react-sweet-progress/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserView, MobileView } from "react-device-detect";

import picture from "../images/stefan1.jpeg";

class About extends Component {
  render() {
    return (
      <div className="proDiv">
        <BrowserView>
          <div className="proBackground"></div>
          <div className="proDiv">
            <p className="title2">About me</p>
            <div>
              <img className="img1" src={picture} alt={"Stefan image"} />
            </div>

            <div className="aboutMeDiv">
              <p className="AboutMeText">
                Full stack web developer with passion for Coding. I finished
                Flatiron school in August 2019. With Flatiron school I was
                building 6 different full stack solo and team web projects. I
                also learn about object-oriented and user-centered design. Ready
                to start new journey with new job, learning and working on my
                new developer skills. I love challenges, and I’m ready to learn
                new developer skills. I’m an avid basketball player, and fun
                fact, I played semi-professionally in Serbia, Europe. I’m three
                time in row We Work ping-pong champion. I’m doing hot yoga and
                I’m active volunteer in “Faith in Practice”.
              </p>
            </div>
          </div>

          <div className="skillTitleRight">
            <div>
              <h3>Hobbies</h3>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="proDiv">
            <div className="proBackground"></div>
            <div className="proDiv">
              <p className="mTitle2">About ME</p>
            </div>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default About;
