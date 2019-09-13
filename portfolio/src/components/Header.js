import React, { Component } from "react";

class Header extends Component {
  style = {
    backgroundColor: "gray",
    color: "white",
    fontSize: 50,
    opacity: 0
  };

  render() {
    return (
      <div style={this.style}>
        <p>2. Projects</p>
      </div>
    );
  }
}

export default Header;
