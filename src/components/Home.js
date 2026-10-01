import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css';
import ContactLinkedIcons from './ContactLinkedIcons';
import './Universal.css';

function ProfilePhoto() {
    return (
        <img
            src={require("../images/profile-photo.JPG")}
            alt="Julia Gontijo"
            style={{ height: 300, width: 300, padding: 10 }}
        />
    );
}

export const Home = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <Container className="full-screen-container">
            <Row className="justify-content-md-center">
                <Col>
                    <Row className="center-content">
                        <ProfilePhoto />
                    </Row>
                    <Row className="center-content">
                        <ContactLinkedIcons />
                    </Row>
                </Col>
                <Col xs lg="8" className="justify-content-md-center">
                    <Row style={{ paddingBottom: 20 }} className="home-header">
                        <h1>
                            HI THERE!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                    </Row>
                    <Row className="about-me-homepage">
                        <p>
                            Hi, I'm <strong>Julia Gontijo Lopes</strong>, a Computer Science master's student at New York University and a Computer Science graduate from PUC Minas University, Brazil. I'm interested in advancing AI and machine learning systems to deliver stronger capabilities with lower computational cost, especially for applications that understand and generate images, video, and the physical world.
                        </p>
                        <p>
                            My research began with questions around <strong>infinite context</strong>: how models can capture long-range dependencies without paying the quadratic cost of attention. That thread now extends into efficient multimodal inference and hardware-systems-ML co-design. In recent work, I cut a production multimodal video pipeline from 28 to 12 minutes and studied visual-token pruning that reduced inference latency by 20% and FLOPs by up to 65%.
                        </p>
                        <p>
                            I'm actively working across two connected areas:
                        </p>
                        <ul>
                            <li>
                                <strong>Model efficiency:</strong> efficient representations for long context and visual data, including positional encodings, visual-token selection, compression, and knowledge distillation.
                            </li>
                            <li>
                                <strong>Systems efficiency:</strong> co-designing models, data pipelines, inference runtimes, and accelerators for computer vision, VLMs, image and video generation, robotics, physical AI, and edge deployment.
                            </li>
                        </ul>
                        <hr />
                        <p>
                            I'm also interested in other things besides models. I have a big golden retriever called{" "}
                            <span
                                style={{ color: "#2E8BC0", cursor: "pointer" }}
                                onClick={togglePopup}
                            >
                                Popcorn
                            </span>
                            , I love to read fantasy romances and living a healthy and active lifestyle.
                        </p>
                    </Row>
                </Col>
            </Row>

            {/* Popup */}
            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1000,
                        background: "white",
                        padding: 5,
                        borderRadius: 10,
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={require("../images/popcorn.JPG")}
                        alt="Popcorn"
                        style={{ width: 400, height: 500, borderRadius: 10 }}
                    />
                    <br />
                    <button
                        onClick={togglePopup}
                        style={{
                            marginTop: 10,
                            padding: "5px 10px",
                            background: "#ff5c5c",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: 5,
                        }}
                    >
                        X
                    </button>
                </div>
            )}

            {/* Overlay */}
            {showPopup && (
                <div
                    onClick={togglePopup}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                    }}
                ></div>
            )}
        </Container>
    );
};
