import React, { Component } from "react";
import { FaCocktail, FaCarAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosSchool, IoIosMail } from "react-icons/io";


import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    return (
      <div className="expDiv">
        <div className="expBackground"></div>
        <div>
          <p className="expTitle">Experience & Education</p>
        </div>
        <div className="iconsDiv">
           <a href="https://github.com/scepa991" target="_blank">
            <FaGithub
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>

          <a href="https://instagram.com/scepa991/" target="_blank">
            <FaInstagram
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          <a href="https://linkedin.com/in/stefanscepanovic/" target="_blank">
            <FaLinkedin
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          <a href="mailto:scepa91@icloud.com" target="_blank">
            <IoIosMail
              style={{
                color: "black",
                width: "5vw",
                height: "5vw",
                
              }}
            />
          </a>
          </div>
        <div className="line">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              contentArrowStyle={{
                borderRight: "7px solid  black"
              }}
              iconStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title naslov">
                Flatiron School
              </h3>
              <h4 className="vertical-timeline-element-subtitle naslov">
                Houston, TX
              </h4>
              <p className="pInExp">
                Collaborative coding environment where I experimented with new
                coding technologies and learn from experienced developers at an
                accelerated pace. I worked with Ruby, JavaScript, React, and
                HTML/CSS in a front-end capacity as well as Ruby on Rails and
                Node as back-end tools. I contributed to or built over 10 small
                project built with Ruby and JavaScript as well as several more
                advanced projects utilizing React and other libraries. For my
                final project I used React Native and i build Live Score App for
                IOS phones.
              </p>
              <p>May 2019 - September 2019</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              contentArrowStyle={{
                borderRight: "7px solid  black"
              }}
              iconStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              icon={<FaCocktail />}
            >
              <h3 className="vertical-timeline-element-title naslov">
                King's BierHaus - Mixologist
              </h3>
              <h4 className="vertical-timeline-element-subtitle naslov">
                Houston, TX
              </h4>
              <p>
                Full bar with 25 seats where my job was to entertain people and
                make drinks. I was responsible for two cash register. I was in
                charge behind the bar and favorite bartender in a restaurant.
              </p>
              <p>May 2017 - May 2019</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "black",
                color: "#fff",
                opacity: "0.8"
              }}
              contentArrowStyle={{
                borderRight: "7px solid  black"
              }}
              iconStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              icon={<FaCocktail />}
            >
              <h3 className="vertical-timeline-element-title naslov">
                VikiHall, Bartender & Waiter
              </h3>
              <h4 className="vertical-timeline-element-subtitle naslov">
                Houston, TX
              </h4>
              <p>
                Bartender and Server for events and private house parties and
                Christmas events
              </p>
              <p>November 2016 - January 2017</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              contentArrowStyle={{
                borderRight: "7px solid  black"
              }}
              iconStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              icon={<FaCarAlt />}
            >
              <h3 className="vertical-timeline-element-title naslov">
                Yura Co. - Shift Leader in Quality Assurance
              </h3>
              <h4 className="vertical-timeline-element-subtitle naslov">
                Nis, Serbia
              </h4>
              <p>
                Managed a team of 40+ people for an International Korean auto
                manufacturer; Supervised production of electric installations
                for KIA and Hyundai vehicles; Recruited new employees.
              </p>
              <p>May 2014 - May 2016</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              contentArrowStyle={{
                borderRight: "7px solid  black"
              }}
              iconStyle={{ background: "black", color: "#fff", opacity: "0.8" }}
              icon={<IoIosSchool />}
              layout={"1-column"}
            >
              <h3 className="vertical-timeline-element-title naslov">
                College of Law and business Studies "USSE"
              </h3>
              <h4 className="vertical-timeline-element-subtitle naslov">
                Nis, Serbia
              </h4>
              <p>
                B.S. in Criminal Justice and Security Management, Criminal
                Justice and Security Management
              </p>
              <p>Octobar 2010 - November 2013 </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default Experience;
