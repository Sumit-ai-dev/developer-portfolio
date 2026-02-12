import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiGo,
  DiDjango,
  DiDocker,
  DiRust,
} from "react-icons/di";
import {
  SiVercel,
  SiBootstrap,
  SiElasticsearch,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiRender,
  SiNextdotjs,
  SiBitcoin,
  SiStreamlit,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{ color: "#E34F26" }} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{ color: "#1572B6" }} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F7DF1E" }} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "#007396" }} />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGo style={{ color: "#00ADD8" }} />
        <div className="tech-icons-text">Go</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "#3776AB" }} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: "#00599C" }} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust style={{ color: "#000000" }} />
        <div className="tech-icons-text">Rust</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DAFB" }} />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ color: "white" }} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#339933" }} />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango style={{ color: "#44B78B" }} />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss style={{ color: "#06B6D4" }} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap style={{ color: "#7952B3" }} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch style={{ color: "#005571" }} />
        <div className="tech-icons-text">Elasticsearch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F05032" }} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker style={{ color: "#2496ED" }} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma style={{ color: "#F24E1E" }} />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "white" }} />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender style={{ color: "#46E3B7" }} />
        <div className="tech-icons-text">Render</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitcoin style={{ color: "#F7931A" }} />
        <div className="tech-icons-text">Bitcoin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit style={{ color: "#FF4B4B" }} />
        <div className="tech-icons-text">Streamlit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={{ color: "#336791" }} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ color: "#3178C6" }} />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
    </Row>
  );
}

export default Techstack;
