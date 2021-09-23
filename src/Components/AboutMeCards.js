import React from "react";
import { Card } from "react-bootstrap";
import "./AboutMeCards.css";
import tempBioImg from "../Images/tempBioImg.jpg";
import OffCanvasContact from "./OffCanvasContact";

function AboutMeCards() {
  return (
    <div>
      <Card id="about-me-card">
        <Card.Header style={{ textShadow: "3px 3px 3px white" }}>
          <h4>About Me</h4>
        </Card.Header>
        <Card.Img
          variant="top"
          src={tempBioImg}
          style={{
            margin: "auto",
            height: "10rem",
            width: "15rem",
            marginTop: "2rem",
          }}
        />
        <Card.Body
          style={{
            fontSize: "170%",
          }}
        >
          <Card.Text id="about-me-card-text">
            Highly motivated certified Front-End Developer, eager to share my
            management skills, sales, customer service background, and drive, to
            assist the business growth while advancing my development skills.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer>
          <OffCanvasContact />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default AboutMeCards;
