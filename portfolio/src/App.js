import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Professional from "./components/Professional";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

class App extends Component {
  style = {
    display: "flex",
    flexDirection: "column"
  };

  render() {
    return (
      <div style={this.style}>
        <Main />
        <Professional />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
