import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsAward } from "react-icons/bs";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsAward /> &nbsp;
          {"Certificate"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Verify"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;