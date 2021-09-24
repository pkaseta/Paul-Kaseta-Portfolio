import React from "react";
import ProjectCards from "./ProjectCards";
import AboutMeCards from "./AboutMeCards";
import "./Home.css";

function Home(props) {
  const { show, setShow, handleClose, handleShow } = props;
  return (
    <div className="home-page-container" id='home'>
      <div>
        <AboutMeCards />
      </div>
      <div>
        <ProjectCards />
      </div>
    </div>
  );
}

export default Home;
