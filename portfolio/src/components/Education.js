import React, { Component } from "react";

import picture from "../images/books.jpg";

class Education extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 700,
    backgroundAttachment: "fixed",
    color: "white",
    fontSize: 50,
    opacity: 0.5
  };

  render() {
    return (
      <div style={this.style}>
        <p>3. Education</p>
      </div>
    );
  }
}

export default Education;
