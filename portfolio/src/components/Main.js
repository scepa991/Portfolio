import React, { Component } from "react";

import picture from "../images/Stefan.jpeg";

class Main extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "100% 15%",
    backgroundSize: "cover",
    height: "1000px",
    backgroundAttachment: "fixed",
    color: "white",
    fontSize: 50
  };

  render() {
    return (
      <div style={this.style}>
        <p>Stefan Scepanovic</p>
      </div>
    );
  }
}

export default Main;
