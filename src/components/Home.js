import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css';
import ContactLinkedIcons from './ContactLinkedIcons';
import './Universal.css';

function ProfilePhoto() {
    return (
        <img
            src={require("../images/profile-photo.jpg")}
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
                            Hi, I'm <strong>Julia Gontijo Lopes</strong>, a Computer Science graduate from PUC Minas University, Brazil. I'm passionate about advancing the foundation of language models to achieve better performance while reducing computational costs.
                        </p>
                        <p>
                            My primary focus is on solving the challenge of <strong>infinite context</strong>, a critical issue in the evolution of language models. Achieving this requires breakthroughs in architecture research and inference efficiency.
                        </p>
                        <p>
                            I'm particularly interested in overcoming two major bottlenecks:
                        </p>
                        <ul>
                            <li>
                                Developing effective and efficient <strong>positional encodings</strong> to capture long-range dependencies.
                            </li>
                            <li>
                                Addressing the <strong>quadratic scaling of attention</strong>, which limits the scalability of current models.
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
