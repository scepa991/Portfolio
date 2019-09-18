import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import picture from "../images/stefan1.jpeg";

class Professional extends Component {
  render() {
    return (
      <div className="proDiv">
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
              building 6 different full stack solo and team web projects. I also
              learn about object-oriented and user-centered design. Ready to
              start new journey with new job, learning and working on my new
              developer skills. I love challenges, and I’m ready to learn new
              developer skills. I’m an avid basketball player, and fun fact, I
              played semi-professionally in Serbia, Europe. I’m three time in
              row We Work ping-pong champion. I’m doing hot yoga and I’m active
              volunteer in “Faith in Practice”.
            </p>
          </div>
        </div>
        <div className="pBar">
          <p className="textBar">
            React <Progress percent={80} />
          </p>
          <p className="textBar">
            React - Native <Progress percent={80} />
          </p>
          <p className="textBar">
            JavaScript <Progress percent={80} />
          </p>
        </div>
        <div className="pBar1">
          <p className="textBar">
            React <Progress percent={80} />
          </p>
          <p className="textBar">
            React - Native <Progress percent={80} />
          </p>
          <p className="textBar">
            JavaScript <Progress percent={80} />
          </p>
        </div>
      </div>
    );
  }
}

export default Professional;
