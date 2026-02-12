import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer with a deep passion for <b className="purple">Bitcoin</b> and <b className="purple">Systems Programming</b>.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Rust, Python and JavaScript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Bitcoin Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Distributed Systems.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Modern Javascript</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  maxWidth: "350px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  boxShadow: "0 0 50px rgba(187, 87, 255, 0.5)",
                  border: "2px solid rgba(187, 87, 255, 0.2)"
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
