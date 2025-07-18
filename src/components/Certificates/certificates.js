import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "../Certificates/CertificateCards";
import Particle from "../Particle";
import awsCertification from "../../Assets/Certificates/certificate2.jpg";
import googleCloudCertification from "../../Assets/Certificates/certificate2.jpg";
import microsoftAzureCertification from "../../Assets/Certificates/certificate2.jpg";
import reactCertification from "../../Assets/Certificates/certificate1.jpg";
import pythonCertification from "../../Assets/Certificates/certificate1.jpg";
import javascriptCertification from "../../Assets/Certificates/certificate1.jpg";

// Placeholder certificate images - replace with actual certificate images

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Recently, I have earned certificates from some of the top companies, showcasing my commitment to continuous learning and professional growth.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={awsCertification}
              isBlog={false}
              title="AWS Certified Solutions Architect"
              description="Comprehensive certification demonstrating expertise in designing and deploying scalable, highly available, and fault-tolerant systems on Amazon Web Services. Covers cloud architecture, security, and best practices."
              ghLink="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
             // demoLink="https://aws.amazon.com/certification/verify/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={googleCloudCertification}
              isBlog={false}
              title="Google Cloud Professional Cloud Architect"
              description="Professional certification validating skills in designing, developing, and managing robust, secure, scalable, and dynamic solutions on Google Cloud Platform. Demonstrates expertise in cloud architecture and best practices."
              ghLink="https://cloud.google.com/certification/cloud-architect"
              //demoLink="https://cloud.google.com/certification/verify/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={microsoftAzureCertification}
              isBlog={false}
              title="Microsoft Azure Fundamentals"
              description="Foundational certification covering core Azure services, security, privacy, compliance, and trust. Demonstrates understanding of cloud concepts and Azure services for compute, networking, and storage."
              ghLink="https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/"
             // demoLink="https://docs.microsoft.com/en-us/learn/certifications/verify/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={reactCertification}
              isBlog={false}
              title="React Professional Developer"
              description="Advanced certification demonstrating proficiency in React ecosystem including hooks, context, state management, and modern React patterns. Covers component architecture, performance optimization, and testing."
              ghLink="https://reactjs.org/docs/getting-started.html"
             // demoLink="https://reactjs.org/community/conferences.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={pythonCertification}
              isBlog={false}
              title="Python Institute Certified Associate"
              description="Comprehensive Python certification covering core programming concepts, data structures, object-oriented programming, and advanced Python features. Demonstrates proficiency in Python development and best practices."
              ghLink="https://pythoninstitute.org/certification"
              //demoLink="https://pythoninstitute.org/certification/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={javascriptCertification}
              isBlog={false}
              title="JavaScript Advanced Developer"
              description="Advanced JavaScript certification covering ES6+, async programming, DOM manipulation, and modern JavaScript frameworks. Demonstrates expertise in full-stack JavaScript development and modern web technologies."
              ghLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              //demoLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;