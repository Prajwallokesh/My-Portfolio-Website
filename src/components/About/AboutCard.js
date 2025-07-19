import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote>
          <p style={{ textAlign: "Justify",fontSize:"21px" }}>
            Hi Everyone, I am <span className="purple">Prajwal Lokesh </span>
            from <span className="purple"> Hassan, Karnataka, India.</span><br />
            
           I am currently pursuing my pre-final year in Bachelor of Engineering in Computer Science and Engineering at Government Engineering College, Dairy Circle, Hassan (VTU affiliated), and have completed a Diploma in Computer Science and Engineering from Government Polytechnic College, Belur.<br />
           <br /> Motivated and detail-oriented pre-final year Computer Science student with a strong foundation in software development, data structures, and cloud technologies. Im Eager for Seeking opportunities to contribute technical skills to real-world projects and continue growing as a full-stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ listStyleType: "none", fontSize:"20px" }}>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listeining Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life as no CTRL+Z!"{" "}
          </p>
          
       </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
