import React, { Component } from "react";
import "../App.css";

import picture from "../images/Stefan.jpeg";

class Main extends Component {
  home = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="style">
        <p className="title">
          Stefan <br /> Scepanovic
        </p>

        <img className="img" src={picture} alt={"Stefan image"} />
      </div>
    );
  }
}

export default Main;

// <button onClick={this.home}>Home</button>
// <button onClick={this.professional}>Professional</button>
// <button onClick={this.project}>Project</button>
// <button onClick={this.education}>Education</button>
// <button onClick={this.experience}>Experience</button>
// <button onClick={this.contact}>Contact</button>
