import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Contact extends Component {
  render() {
    return (
      <div className="contDiv">
        <div className="contBackground"></div>
        <div className="expDiv">
          <div className="ContactButton">
            <AwesomeButton
              type="primary"
              href="mailto:scepa91@icloud.com"
              target="_blank"
            >
              Contact me!
            </AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
