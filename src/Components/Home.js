import React from "react";
import ProjectCards from "./ProjectCards";
import AboutMeCards from "./AboutMeCards";
import "./Home.css";

function Home() {
  return (
    <div className="home-page-container">
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
