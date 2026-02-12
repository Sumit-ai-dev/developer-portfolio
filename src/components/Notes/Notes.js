import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Notes() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Technical Writes </strong>
        </h1>
        <p style={{ color: "white" }}>
          I write about Systems Programming, Bitcoin, and my development journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" }}>Writing & Articles</h1>
            <p>
              I share my technical learnings and project updates on <b className="purple">LinkedIn</b>.
            </p>
            <a
              href="https://www.linkedin.com/in/sumit-das-42a8522a4/recent-activity/all/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              View My Posts
            </a>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Notes;
