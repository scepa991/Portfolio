import React, { Component } from "react";
import "../App.css";
import { IoIosMail } from "react-icons/io";
import { BrowserView, MobileView } from "react-device-detect";
import logo from "../images/logo.png"

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

class Main extends Component {
  state = {
    menu: false,
    aboutMe: false
  };

  render() {
    return (
      <div className="style">
        
          <img className="logo" src={logo} alt="logo" />
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
          
        
        {/* <MobileView>
        <img className="MobileLogo" src={logo} alt="logo" />
           <a href="https://github.com/scepa991" target="_blank">
            <FaGithub
              style={{
                color: "#d3d3d3",
                width: "9vw",
                height: "9vw",
                position: "absolute",
                top: "20%",
                left: "88%"
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "#d3d3d3",
                width: "9vw",
                height: "9vw",
                position: "absolute",
                top: "25%",
                left: "88%"
              }}
            />
          </a>
          <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
            <FaLinkedin
              style={{
                minwidth: "230px",
                color: "#d3d3d3",
                width: "9vw",
                height: "9vw",
                position: "absolute",
                top: "30%",
                left: "88%"
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "#d3d3d3",
                width: "9vw",
                height: "9vw",
                position: "absolute",
                top: "35%",
                left: "88%"
              }}
            />
          </a>
        </MobileView> */}

        
      </div>
    );
  }
}

export default Main;


// <MobileView>
//           <img className="logo" src={logo} alt="logo" />
//           <div className="ContactButton"></div>
//           <a href="https://github.com/scepa991" target="_blank">
//             <FaGithub
//               style={{
//                 color: "black",
//                 width: "6vw",
//                 height: "6vw",
//                 position: "absolute",
//                 top: "1%",
//                 left: "43%"
//               }}
//             />
//           </a>

//           <a href="https://instagram.com/scepa991/" target="_blank">
//             <FaInstagram
//               style={{
//                 color: "#d3d3d3",
//                 width: "6vw",
//                 height: "6vw",
//                 position: "absolute",
//                 top: "1%",
//                 left: "51%"
//               }}
//             />
//           </a>
//           <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
//             <FaLinkedin
//               style={{
//                 color: "black",
//                 width: "6vw",
//                 height: "6vw",
//                 position: "absolute",
//                 top: "1%",
//                 left: "36%"
//               }}
//             />
//           </a>
//           <a href="mailto:scepa91@icloud.com" target="_blank">
//             <IoIosMail
//               style={{
//                 color: "d3d3d3",
//                 width: "6vw",
//                 height: "6vw",
//                 position: "absolute",
//                 top: "1%",
//                 left: "58%"
//               }}
//             />
//           </a>
//         </MobileView>