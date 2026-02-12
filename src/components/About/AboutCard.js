import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit Das</span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am a <span className="purple">Full Stack Developer</span> and an aspiring <span className="purple">Bitcoin Core Engineer</span>.
            <br />
            I am passionate about building projects with <span className="purple">Rust, C++, Python, JavaScript and TypeScript</span>
            <br />
            and I actively contribute to <span className="purple">Cybersecurity Organizations</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source 🌐
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain Tech ⛓️
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Cool Projects 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is the law, but creativity is the soul."{" "}
          </p>
          <footer className="blockquote-footer">Sumit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
