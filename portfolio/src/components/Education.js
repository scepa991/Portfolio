import React, { Component } from "react";
import { fallDown as Menu } from "react-burger-menu";
import "../App.css";

import picture from "../images/books.jpg";

class Education extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundImageOpacity: 0.5,
    height: 700,
    backgroundAttachment: "fixed",
    opacity: 0.5
  };
  text = {
    color: "green",
    textAlign: "left"
  };
  title = {
    color: "white",
    fontSize: 50,
    textAlign: "center"
  };

  render() {
    return (
      <div style={this.style}>
        <p style={this.title}>3. Education</p>
        <div style={this.text}>
          <p>Flatiron School</p>
        </div>
      </div>
    );
  }
}

export default Education;
