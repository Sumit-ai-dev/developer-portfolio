import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Notes() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Bitcoin Notes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Technical deep-dives into the Bitcoin protocol.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" }}>🚧 COMING SOON 🚧</h1>
            <p>
              I am currently documenting my journey through 
              <br />
              <b className="purple"> Mastering Bitcoin </b> & 
              <b className="purple"> Summer of Bitcoin 2025 </b>
            </p>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Notes;
