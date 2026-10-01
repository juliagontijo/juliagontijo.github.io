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
                            Hi, I'm <strong>Julia Gontijo Lopes</strong>, a Computer Science master's student at New York University working on efficient AI systems for visual and multimodal intelligence. My work follows the path from model behavior to deployment: profiling production video pipelines, reducing redundant visual tokens, and measuring the latency, memory, throughput, and accuracy tradeoffs that determine whether an idea works in practice.
                        </p>
                        <p>
                            I'm especially interested in <strong>hardware-systems-ML co-design</strong>: how model architectures, data pipelines, inference runtimes, and accelerators can be shaped together to make intelligent applications faster and more efficient. In recent work, I cut a multimodal video-processing pipeline from 28 to 12 minutes, explored token-pruning methods that reduced inference latency by 20% and FLOPs by up to 65%, and deployed gaze-conditioned vision-language inference under edge memory constraints.
                        </p>
                        <p>
                            These problems connect the areas I want to keep pushing: ML infrastructure and inference, computer vision and vision-language models, robotics and physical AI, and image and video understanding and generation. I'm drawn to work at the boundary between models and machines, where hardware-aware systems design and better world understanding translate into applications that are faster, smaller, and more capable.
                        </p>
                        <hr />
                        <p>
                            Away from the computer, I spend time with my golden retriever{" "}
                            <span
                                style={{ color: "#2E8BC0", cursor: "pointer" }}
                                onClick={togglePopup}
                            >
                                Popcorn
                            </span>
                            , read fantasy romance, and stay active.
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
