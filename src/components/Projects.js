import React, { Component } from "react";
import picture4 from "../images/soccer12.jpeg";
import picture5 from "../images/meteor.jpg";
import { FaGithub, FaYoutube } from "react-icons/fa";


class Projects extends Component {
  render() {
    return (
      <div className="ProjectPage">
      
          <div className="projectTitle">
            <p className="title4">Projects</p>
          </div>

          <div className="CardDeck">
            <div className="card10">
              <img src={picture4} class="imageCard" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Live Score</h5>
                <a
                  href="https://github.com/scepa991/Live_score"
                  target="_blank"
                >
                  <FaGithub
                    style={{
                      color: "black",
                      width: "3vw",
                      height: "3vw",
                      position: "absolute",
                      top: "92%",
                      left: "80%"
                    }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=MW5xck8BExw&t=311s"
                  target="_blank"
                >
                  <FaYoutube
                    style={{
                      color: "black",
                      width: "3vw",
                      height: "3vw",
                      position: "absolute",
                      top: "92%",
                      left: "89%"
                    }}
                  />
                </a>

                <p class="card-text">
                  Live Score is app where you can check live scores for any
                  soccer game, along with information and statistics for any
                  past or future games.
                </p>
                <p class="text-muted">Avgust 2019</p>
                <div className="badge1">
                  <p className="size">
                    <span class="badge badge-primary ">React Native</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">Ruby on Rails</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">JSON Web Token</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">Redux</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">PostgreSQL</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card10">
              <img src={picture5} class="imageCard" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Weather app</h5>
                <a
                  href="https://github.com/scepa991/weather_app"
                  target="_blank"
                >
                  <FaGithub
                    style={{
                      color: "black",
                      width: "3vw",
                      height: "3vw",
                      position: "absolute",
                      top: "92%",
                      left: "80%"
                    }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=cfmFm_8TeJc"
                  target="_blank"
                >
                  <FaYoutube
                    style={{
                      color: "black",
                      width: "3vw",
                      height: "3vw",
                      position: "absolute",
                      top: "92%",
                      left: "89%"
                    }}
                  />
                </a>

                <p class="card-text">
                  Website for Weather forecast and world news - check current
                  weather for any city in the world, along with five days
                  weather forecast.
                </p>
                <p class="text-muted">Jul 2019</p>
                <div className="badge1">
                  <p className="size">
                    <span class="badge badge-primary ">React JS</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">Ruby on Rails</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">RESTful API</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">Bootstrap</span>
                  </p>

                  <p className="size">
                    <span class="badge badge-primary ">PostgreSQL</span>
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        

       
      </div>
    );
  }
}

export default Projects;
