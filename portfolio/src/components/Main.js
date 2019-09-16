import React, { Component } from "react";
import "../App.css";
import { fallDown as Menu } from "react-burger-menu";
import { FaInstagram, FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";

import picture from "../images/Stefan.jpeg";

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
        <div>
          <Menu right>
            <a id="home" className="" href="/">
              Professional
            </a>
            <a id="about" className="" href="/about">
              Projects
            </a>
            <a id="contact" className="" href="/contact">
              Education
            </a>
            <a onClick={this.showSettings} className="" href="">
              Experience
            </a>
            <a onClick={this.showSettings} className="" href="">
              Contact
            </a>
          </Menu>
        </div>
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
        <FaSlack
          style={{
            color: "d3d3d3",
            width: "3vw",
            height: "3vw",
            position: "absolute",
            top: "1%",
            left: "56%"
          }}
        />
        <p className="quote">
          “I'm not a great programmer;
          <br />
          <br />
          I'm just a good programmer with great habits.” <br />
          <br />― Kent Beck
        </p>

        <img className="img" src={picture} alt={"Stefan image"} />
      </div>
    );
  }
}

export default Main;
