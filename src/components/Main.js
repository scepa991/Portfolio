import React, { Component } from "react";
import "../App.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BrowserView, MobileView } from "react-device-detect";

class Main extends Component {
  state = {
    menu: false,
    aboutMe: false
  };

  render() {
    return (
      <div className="style">
        <p className="title">
          Stefan
          <br /> Scepanovic
          <p className="title1">Full stack developer</p>
        </p>
        <div className="ContactButton"></div>
        <a href="https://github.com/scepa991" target="_blank">
          <FaGithub
            style={{
              color: "black",
              width: "3vw",
              height: "3vw",
              position: "absolute",
              top: "1%",
              left: "45%"
            }}
          />
        </a>

        <a href="https://instagram.com/scepa991/" target="_blank">
          <FaInstagram
            style={{
              color: "#d3d3d3",
              width: "3vw",
              height: "3vw",
              position: "absolute",
              top: "1%",
              left: "51%"
            }}
          />
        </a>
        <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
          <FaLinkedin
            style={{
              color: "black",
              width: "3vw",
              height: "3vw",
              position: "absolute",
              top: "1%",
              left: "40%"
            }}
          />
        </a>
        <a href="mailto:scepa91@icloud.com" target="_blank">
          <IoIosMail
            style={{
              color: "d3d3d3",
              width: "3vw",
              height: "3vw",
              position: "absolute",
              top: "1%",
              left: "56%"
            }}
          />
        </a>
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
      </div>
    );
  }
}

export default Main;
