import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";

import Main from "./components/Main";
import Professional from "./components/Professional";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";

class App extends Component {
  style = {
    display: "flex",
    flexDirection: "column"
  };

  render() {
    return (
      <BrowserRouter>
        <div style={this.style}>
          <Menu right>
            <a id="home" className="" href="/">
              Home
            </a>
            <a id="about" className="" href="/about">
              About Me
            </a>
            <a id="professional" className="" href="/professional">
              Professional
            </a>
            <a id="project" className="" href="/projects">
              Projects
            </a>
            <a id="experience" className="" href="/experience">
              Experience
            </a>
            <a id="education" className="" href="/education">
              Education
            </a>
            <a id="contact" className="" href="/contact">
              Contact Me
            </a>
          </Menu>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/professional" component={Professional} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
