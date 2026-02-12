import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Resume Content Removed as Requested */}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
