import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pro.jpg";
import emotion from "../../Assets/Projects/pro.jpg";
import editor from "../../Assets/Projects/pro.jpg";
import sample from "../../Assets/Projects/pro.jpg";
import suicide from "../../Assets/Projects/pro.jpg";
import bitsOfCode from "../../Assets/Projects/pro.jpg";

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
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="Upcoming Project"
              description="We are currently working on an exciting upcoming project aimed at solving real-world challenges through innovation and technology. While the specifics are still under development, the project will focus on creating a meaningful impact by leveraging modern tools, smart design, and user-centric solutions"
              ghLink="https://github.com/prajwallokesh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
