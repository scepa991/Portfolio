import React, { Component } from "react";
import { render } from "react-dom";
import { Card, CardWrapper } from "react-swipeable-cards";
import picture4 from "../images/dots.jpg";

class Deck extends Component {
  render() {
    return (
      <div>
        <CardWrapper
          style={{
            position: "absolute",
            top: "20%",
            left: "2%",

            background: "gray",
            height: "35vh",
            width: "90%"
          }}
        >
          <Card style={{ background: "blue", height: "32vh", width: "85%" }}>
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
          <Card style={{ background: "white", height: "32vh", width: "85%" }}>
            Ja!
          </Card>
          <Card style={{ background: "blue", height: "32vh", width: "85%" }}>
            Sam!
          </Card>
          <Card style={{ background: "yellow", height: "32vh", width: "85%" }}>
            HFac!
          </Card>
          <Card style={{ background: "gray", height: "34vh", width: "85%" }}>
            Afafs!
          </Card>
          <Card style={{ background: "white", height: "34vh", width: "85%" }}>
            Hefa!
          </Card>
        </CardWrapper>
      </div>
    );
  }
}

export default Deck;
