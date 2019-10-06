import React, { Component } from "react";
import picture4 from "../images/soccer12.jpeg";
import picture5 from "../images/meteor.jpg";
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



class Projects extends Component {
  render() {
    return (
              <div className="projectPage">
                 <div className="iconsDiv">
           <a href="https://github.com/scepa991" target="_blank">
            <FaGithub
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
            <FaLinkedin
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "#d3d3d3",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          </div>
          <div className="projectTitle">
            <p className="title4">Projects</p>
          </div>

          <div className="CardDeck">
            <div className="card10">
              <img src={picture4} class="imageCard" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Live Score</h5>
                 <a
                  href="https://www.youtube.com/watch?v=MW5xck8BExw&t=311s"
                  target="_blank"
                >
                  <FaYoutube
                    className="iconsSmall"
                  />
                </a>
                <a
                  href="https://github.com/scepa991/Live_score"
                  target="_blank"
                >
                  <FaGithub
                    className="iconsSmall"
                  />
                </a>
               

                <p class="card-text">
                  Live Score is app where you can check live scores for any
                  soccer game, along with information and statistics for any
                  past or future games.
                </p>
                <p class="text-muted">Avgust 2019</p>
                
              </div>
            </div>

            <div className="card10">
            
              <img src={picture5} class="imageCard" alt="..." />
             
              <div class="card-body">
                <h5 class="card-title">Weather app</h5>
                 <a
                  href="https://www.youtube.com/watch?v=cfmFm_8TeJc"
                  target="_blank"
                >
                  <FaYoutube
                    className="iconsSmall"
                  />
                </a>
                <a
                  href="https://github.com/scepa991/weather_app"
                  target="_blank"
                >
                  <FaGithub
                    className="iconsSmall"
                  />
                </a>
               

                <p class="card-text">
                  Website for Weather forecast and world news - check current
                  weather for any city in the world, along with five days
                  weather forecast.
                </p>
                <p class="text-muted">Jul 2019</p>
                
              </div>
            </div>
            </div>
              
              </div>
      
    );
  }
}

export default Projects;


{/* <div className="badge1">
                  <p className="size">
                    <span>React JS</span>
                  </p>

                  <p className="size">
                    <span>Ruby on Rails</span>
                  </p>

                  <p className="size">
                    <span>RESTful API</span>
                  </p>

                  <p className="size">
                    <span>Bootstrap</span>
                  </p>

                  <p className="size">
                    <span>PostgreSQL</span>
                  </p>
                </div> */}