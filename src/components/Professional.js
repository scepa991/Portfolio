import React, { Component } from "react";
import "react-sweet-progress/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserView, MobileView } from "react-device-detect";

import picture from "../images/stefan1.jpeg";
import picture1 from "../images/ruby1.png";
import picture2 from "../images/js2.png";
import picture3 from "../images/react1.png";
import picture4 from "../images/dots.jpg";

class Professional extends Component {
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

          <div className="card0" style={{ backgroundColor: "#cfd786" }}>
            <img className="logo" src={picture1} alt={"ruby"} />
            <h3 className="CardTitle">Ruby</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </div>
          <div className="card1">
            <img className="logo" src={picture2} alt={"js"} />
            <h3 className="CardTitle1">JavaScript</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </div>
          <div className="card2">
            <img className="logo" src={picture3} alt={"ruby"} />
            <h3 className="CardTitle">React</h3>
            <p className="CardPara1">
              React Native
              <br />
              Redux
            </p>
          </div>
          <div className="card3">
            <img className="logo" src={picture4} alt={"ruby"} />
            <h3 className="CardTitle">Other</h3>
            <p className="CardPara">
              SQL (MYSQL, PostgreSQL)
              <br />
              HTML / CSS
              <br />
              Bootstrap
            </p>
          </div>
        </BrowserView>
        <MobileView>
          <div className="proBackground"></div>
          <div className="proDiv">
            <p className="mobileTitle2">About me</p>
            <div>
              <img className="mobileImg1" src={picture} alt={"Stefan image"} />
            </div>
            <div className="aboutMeDiv">
              <p className="MobileAboutMeText">
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

          <div className="MobileCard0" style={{ backgroundColor: "#cfd786" }}>
            <img className="logo" src={picture1} alt={"ruby"} />
            <h3 className="CardTitle">Ruby</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </div>
          <div className="MobileCard1">
            <img className="logo" src={picture2} alt={"js"} />
            <h3 className="CardTitle1">JavaScript</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </div>
          <div className="MobileCard2">
            <img className="logo" src={picture3} alt={"ruby"} />
            <h3 className="CardTitle">React</h3>
            <p className="CardPara1">
              React Native
              <br />
              Redux
            </p>
          </div>
          <div className="MobileCard3">
            <img className="logo" src={picture4} alt={"ruby"} />
            <h3 className="CardTitle">Other</h3>
            <p className="CardPara">
              SQL (MYSQL, PostgreSQL)
              <br />
              HTML / CSS
              <br />
              Bootstrap
            </p>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default Professional;
