import React, { Component } from "react";

import { Card, CardWrapper } from "react-swipeable-cards";
import picture1 from "../images/ruby1.png";
import picture2 from "../images/js2.png";
import picture3 from "../images/react1.png";
import picture4 from "../images/dots.jpg";

class Deck1 extends Component {
  render() {
    return (
      <div>
        <CardWrapper
          style={{
            position: "absolute",
            top: "20%",
            left: "2%",
            transition: "none",
            overflow: "hidden",
            height: "35vh",
            width: "90%"
          }}
        >
          <Card style={{ background: "gray", height: "32vh", width: "31vh" }}>
            <img className="logo" src={picture3} alt={"ruby"} />
            <h3 className="CardTitle">React</h3>
            <p className="CardPara">
              React Native
              <br />
              Redux
            </p>
          </Card>
          <Card style={{ background: "gray", height: "32vh", width: "31vh" }}>
            <img className="logo" src={picture2} alt={"js"} />
            <h3 className="CardTitle1">JavaScript</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </Card>
          <Card style={{ background: "gray", height: "32vh", width: "31vh" }}>
            <img className="logo" src={picture1} alt={"ruby"} />
            <h3 className="CardTitle">Ruby</h3>
            <p className="CardPara">
              Ruby on Rails
              <br />
              API development with Rails
              <br />
              RSpec
            </p>
          </Card>
          <Card style={{ background: "gray", height: "32vh", width: "31vh" }}>
            <img className="logo" src={picture4} alt={"ruby"} />
            <h3 className="CardTitle">Other</h3>
            <p className="CardPara">
              SQL (MYSQL, PostgreSQL)
              <br />
              HTML / CSS
              <br />
              Bootstrap
            </p>
          </Card>
          <Card style={{ background: "gray", height: "34vh", width: "31vh" }}>
            Afafs!
          </Card>
          <Card style={{ background: "gray", height: "34vh", width: "31vh" }}>
            Hefa!
          </Card>
        </CardWrapper>
      </div>
    );
  }
}

export default Deck1;
