import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";


import Main from "./components/Main";
import Professional from "./components/Professional";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";

import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        

        <BrowserRouter>
       
          <Menu right>
            <a id="home" className="a" href="/">
              Home
            </a>
            <a id="about" className="a" href="/about">
              About Me
            </a>
            <a id="project" className="a" href="/projects">
              Projects
            </a>
            <a id="experience" className="a" href="/experience">
              Experience
            </a>
          </Menu>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={Professional} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={About} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


{/* <a href="https://github.com/scepa991" target="_blank">
            <FaGithub
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "44%"
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "51%"
              }}
            />
          </a>
          <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
            <FaLinkedin
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "38%"
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "d3d3d3",
                width: "5vw",
                height: "5vw",
                position: "absolute",
                top: "1%",
                left: "57%"
              }}
            />
          </a> */}