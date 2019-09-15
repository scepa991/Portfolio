import React, { Component } from "react";
import "../App.css";
import { fallDown as Menu } from "react-burger-menu";

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

        <img className="img" src={picture} alt={"Stefan image"} />
      </div>
    );
  }
}

export default Main;
