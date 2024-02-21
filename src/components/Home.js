import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import ContactLinkedIcons from './ContactLinkedIcons';
import './Universal.css'

function ProfilePhoto () {
    return (
        <img
        src={require("../images/profile-photo.JPG")}
        alt="Julia Gontijo"
        style={{height:300, width:300, padding:10}}
      />
  );
}


export const Home = () =>
        <Container className="full-screen-container">
            <Row className = "justify-content-md-center">
                <Col>
                    <Row className = "center-content">
                    <ProfilePhoto/>
                    </Row>
                    <Row className = "center-content">
                    <ContactLinkedIcons />
                    </Row>
                </Col>
                <Col xs lg="8" className = "justify-content-md-center">
                    <Row style={{ paddingBottom: 20 }} className = "home-header">
                        <h1>
                            HI THERE!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                            </span>
                        </h1>
                    </Row>
                    <Row className = "about-me-homepage">
                        My name is Julia Gontijo Lopes. I'm a student in Computer Science, in Brazil.
                        My interests inlcude Artificial Inteligence and Machine Learning. More specifically applied to Natural Language Process and Computer Vision.
                        I'm currently based in San Francisco looking to learn and find opportunities inside this big community.
                    </Row>
                </Col>
            </Row>
        </Container>



