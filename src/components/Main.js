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
        <BrowserView>
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
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "44%"
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
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
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "38%"
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "d3d3d3",
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "57%"
              }}
            />
          </a>
        </BrowserView>

        <MobileView>
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
                width: "6vw",
                height: "6vw",
                position: "absolute",
                top: "1%",
                left: "43%"
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "#d3d3d3",
                width: "6vw",
                height: "6vw",
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
                width: "6vw",
                height: "6vw",
                position: "absolute",
                top: "1%",
                left: "37%"
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "d3d3d3",
                width: "6vw",
                height: "6vw",
                position: "absolute",
                top: "1%",
                left: "58%"
              }}
            />
          </a>
        </MobileView>
      </div>
    );
  }
}

export default Main;
