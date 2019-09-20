import React, { Component } from "react";
import { FaInstagram, FaGithub, FaCocktail, FaCarAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

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
        <div className="line">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderLeft: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Flatiron School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Houston, TX
              </h4>
              <p>The software engineering program.</p>
              <p>May 2019 - September 2019</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaCocktail />}
            >
              <h3 className="vertical-timeline-element-title">
                King's BierHaus - Mixologist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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
                background: "rgb(33, 150, 243)",
                color: "#fff"
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaCocktail />}
            >
              <h3 className="vertical-timeline-element-title">
                VikiHall, Bartender & Waiter
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaCarAlt />}
            >
              <h3 className="vertical-timeline-element-title">
                Yura Co. - Shift Leader in Quality Assurance
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IoIosSchool />}
              layout={"1-column"}
            >
              <h3 className="vertical-timeline-element-title">
                College of Law and business Studies "USSE"
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
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
