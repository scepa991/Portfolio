import React, { Component } from "react";
import "react-sweet-progress/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserView, MobileView } from "react-device-detect";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import picture from "../images/stefan1.jpeg";
import picture1 from "../images/ruby1.png";
import picture2 from "../images/js2.png";
import picture3 from "../images/react1.png";
import picture4 from "../images/dots.jpg";

class Professional extends Component {
  render() {
    return (
      <div className="proDiv">
          <div className="proBackground"></div>
          <div className="ProDiv">
            <p className="title2">About me</p>
            <div className="imgDiv">
              <img className="img1" src={picture} alt={"Stefan image"} />
            </div>
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
            <div className="aboutMeDiv">
              <p className="AboutMeText">
                Full Stack Web Developer with a passion to make a positive difference in people’s lives through code. With experience In Ruby on Rails, JavaScript, and React Native, I discovered web development through my curiosity to understand how websites work. I arrived in the United States from Serbia without knowing English. However, being a person who learns very quickly, I was speaking the language within a few months and utilizing it fully in my first job. I bring strong skills in problem-solving, creativity, and strategic thinking. 
              </p>
            
        

          
</div>
  <div class="cards">
                
                <div class="SingleCard">
                   <div className="DivImg">
                      <img src={picture1} class="CardImg" alt="..." />
                   </div>
                   <div className="SingleCardSecundPart">
                      <p className="CardTitleDiv">Ruby</p>
                      <p className="CardPDiv"> Ruby on the rails<br/>API development with Rails<br/>RSpec</p>
                   </div>
                </div>

                <div class="SingleCard">
                   <div className="DivImg">
                      <img src={picture3} class="CardImg" alt="..." />
                   </div>
                   <div className="SingleCardSecundPart">
                      <p className="CardTitleDiv">React</p>
                      <p className="CardPDiv"> React Native<br/>Redux</p>
                   </div>
                </div>

                <div class="SingleCard">
                   <div className="DivImg">
                      <img src={picture2} class="CardImg" alt="..." />
                   </div>
                   <div className="SingleCardSecundPart">
                      <p className="CardTitleDiv">Java Script</p>
                      <p className="CardPDiv"> </p>
                      
                   </div>
                </div>

                <div class="SingleCard">
                   <div className="DivImg">
                      <img src={picture4} class="CardImg" alt="..." />
                   </div>
                   <div className="SingleCardSecundPart">
                      <p className="CardTitleDiv">Other</p>
                      <p className="CardPDiv"> SQL (MYSQL, PostgreSQL)<br/>HTML / CSS<br/>Bootstrap</p>
                   </div>
                </div>

 	

	</div>
        
      </div>
      </div>
         
    );
  }
}

export default Professional;
