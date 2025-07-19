import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="homeinfo" style={{fontSize:"22px"}}>

            <p className="home-about-body" style={{ textAlign: "left", lineHeight:"2rem" ,paddingLeft:"0px" }}>
              I fell in love with programming and I’ve definitely learned a thing or two along the way… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
             
                <b className="purple"> Python, C, and Java. </b>
              
              <br />
              <br />
              My fields of interest lie in  the 
             
                <b className="purple"> Web Development and AI </b> and
                also in the {" "}
                <b className="purple">
                  Cloud Computing  and Data structure.
                </b>
          
              <br />
              <br />
              Whenever possible, I channel my passion into building<b className="purple"></b> and
              
                <b className="purple">
                  {" "}
                  full-stack solutions using cloud services
                </b>
              
              &nbsp; and
              
                <b className="purple"> Artificial Intelligence.</b>
             
            </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid responsive-avatar" 
                alt="avatar" 
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  width: "320px",
                  maxHeight: "360px"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prajwallokesh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prajwal-k-l-523a59343/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz_peace_____"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
