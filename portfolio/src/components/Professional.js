import React, { Component } from "react";

import picture from "../images/1.jpg";

class Professional extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "100% 15%",
    backgroundSize: "cover",
    height: "1000px",
    backgroundAttachment: "fixed",
    color: "white",
    fontSize: 50,
    opacity: 0.5
  };

  render() {
    return (
      <div style={this.style}>
        <p>1. Professional</p>
      </div>
    );
  }
}

export default Professional;
