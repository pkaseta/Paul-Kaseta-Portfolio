import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectCards.css";
import myProjects from "../Data/MyProjects";

function ProjectCards() {
  return (
    <div className="project-card-container">
      <Card
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          color: "white",
          marginTop: "5%",
          marginBottom: "8%",
          boxShadow: "5px 5px 5px black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Header style={{ textShadow: "3px 3px 3px black" }}>
          <h4>My Projects</h4>
        </Card.Header>
        <div className="project-cards">
          {myProjects.length
            ? myProjects.map((project) => (
              <>
                <Card
                  style={{
                    margin: "2vh 1vw 2vh 1vw",
                    // marginTop: "2vh",
                    // marginBottom: "2vh",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    width: "60%",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    key={project.name}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      style={{
                        fontWeight: "bold",
                        fontSize: "160%",
                        textShadow: "2px 2px 2px black",
                      }}
                    >
                      {project.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "130%",
                        textShadow: "2px 2px 2px black",
                      }}
                    >
                      {project.description}
                    </Card.Text>
                    <Button
                      key={project.name}
                      className="mt-auto"
                      href={project.website}
                      variant="dark"
                    >
                      Go To Site
                    </Button>
                    <Button
                      key={project.name}
                      href={project.githubRepo}
                      style={{ marginTop: "1rem" }}
                      variant="dark"
                    >
                      GitHub Repo
                    </Button>
                  </Card.Body>
                </Card>
              </>
            ))
            : ""}
        </div>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default ProjectCards;
