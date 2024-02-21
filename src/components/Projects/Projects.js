import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoWeb from "../../Assets/Projects/todo_web.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoWeb}
              isBlog={false}
              title="To-Do"
              description="Have you ever forgotten some important things to do? Have you forgotten important moments or anniversaries for your family? Don't worry, use this effective and free task tracker and to do list task manager free to help you manage time and enjoy an easy life. To-Do List - Schedule Planner & To Do List Task Manager is a free and easy online to-do list manager and schedule planner app which can be used to manage your time."
              ghLink="https://github.com/vivekgajera109/To-do"
              demoLink="https://todotaskmanagement-97758.firebaseapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
