import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiIntellijidea,
  SiNotion,
  SiLinux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea style={{ color: "#FA2050" }} />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#FCC624" }} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack style={{ color: "#E01E5A" }} />
        <div className="tech-icons-text">Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <div className="tech-icons-text">Notion</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
