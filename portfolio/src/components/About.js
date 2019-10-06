import React, { Component } from "react";
import "react-sweet-progress/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserView, MobileView } from "react-device-detect";

import picture from "../images/stefan1.jpeg";

class About extends Component {
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
             First and foremost, I love writing code. Ever since I started my own journey with some basics code and manipulating it to produce partial output, I have been obsessed with idea of using software to salve practical problems. Software engineering is never-ending puzzle that i am passionately engaged in solving. I believe in power of programming to transform and improve the lives of people around the world.
             I have Bachelor degree in Bachelor of Science, Public Security Management, which I completed in Serbia, Southeast Europe. I didn't find myself in that industry and eager for adventure I decide to move in USA. When i moved here i didn't speak English so I started working as a bartender at "Kings BierHaus".
             After two years of bartending and when my English was better i decided to follow my passion for coding and i started Flatiron School. I studied new languages, web and front-end Frameworks, with six group and solo full stack projects. I enjoyed it all the time and was fascinated how much i love coding and it was here that i learned truly how much there was yet to learn.
             So, now, in industry, this passion remains with me. There's certainly yet more to learn, yet more problems to solve and yet more to build. And for this I am very grateful.
            </p>
          </div>
        </div>

        <div className="skillTitleRight">
          <div>
            <h3>Hobbies</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
