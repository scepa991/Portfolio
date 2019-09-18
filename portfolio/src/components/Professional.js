import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class Professional extends Component {
  render() {
    return (
      <div className="proDiv">
        <div className="proBackground"></div>
        <div className="proDiv">
          <p className="title2">Skills</p>
        </div>
        <div className="pBar">
          <p className="textBar">
            React <Progress percent={80} />
          </p>
          <p className="textBar">
            React - Native <Progress percent={80} />
          </p>
          <p className="textBar">
            JavaScript <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby Rails <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby Rails <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby <Progress percent={80} />
          </p>
        </div>
        <div className="pBar1">
          <p className="textBar">
            React <Progress percent={80} />
          </p>
          <p className="textBar">
            React - Native <Progress percent={80} />
          </p>
          <p className="textBar">
            JavaScript <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby Rails <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby Rails <Progress percent={80} />
          </p>
          <p className="textBar">
            Ruby <Progress percent={80} />
          </p>
        </div>
      </div>
    );
  }
}

export default Professional;
