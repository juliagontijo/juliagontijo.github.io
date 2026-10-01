// All import statements should be at the top of the file
import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "./Particle"; // Adjust the path if necessary

// Keep the resume at a stable public URL so cached site builds do not point to
// an obsolete, hash-named PDF after a deployment.
const pdf = `${process.env.PUBLIC_URL}/Julia_Gontijo_Lopes_Resume.pdf`;

// Ensure this line is below all import statements
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function Resume() {
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
  
    return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Row style={{ justifyContent: "center", position: "relative", paddingTop: 50 }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", backgroundColor: "#2E8BC0"}}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
  
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
            </Document>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Resume;
