import React, { Component } from "react";

import picture from "../images/Stefan.jpeg";

class Main extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "100% 15%",
    backgroundSize: "cover",
    height: 1000,
    backgroundAttachment: "fixed",
    color: "white",
    fontSize: 50,
    opacity: 0.9
  };

  home = () => {
    window.scrollTo(0, 0);
  };

  professional = () => {
    window.scrollTo(0, 1000);
  };

  project = () => {
    window.scrollTo(0, 2000);
  };

  education = () => {
    window.scrollTo(0, 2600);
  };

  experience = () => {
    window.scrollTo(0, 3600);
  };

  contact = () => {
    window.scrollTo(0, 4600);
  };

  render() {
    return (
      <div style={this.style}>
        <button onClick={this.home}>Home</button>
        <button onClick={this.professional}>Professional</button>
        <button onClick={this.project}>Project</button>
        <button onClick={this.education}>Education</button>
        <button onClick={this.experience}>Experience</button>
        <button onClick={this.contact}>Contact</button>
        <p>Stefan Scepanovic</p>
      </div>
    );
  }
}

export default Main;
