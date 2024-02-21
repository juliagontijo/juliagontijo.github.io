import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'
import './Universal.css'
import ContactLinkedIcons from "./ContactLinkedIcons";
import { Container } from "react-bootstrap";


function Contact () {
    return (
    <Container className ="full-screen-container vertical-stack">
        <Row xs={12}>
            <Col className="center-content">
            <h1>This is how you can reach out to me!</h1>
            </Col>
        </Row>
        <Row xs={12}  style={{paddingTop:'30px'}}>
            <Col className="center-content">
            <h6>Email: <a href="mailto:juliagontijolopes@gmail.com" className ="extra-contact-info">juliagontijolopes@gmail.com</a></h6>
            </Col>
        </Row>
        <Row xs={12}  style={{paddingTop:'5px'}}>
            <Col className="center-content">
            <h6>Number: <a href="sms:+5531998307545" className ="extra-contact-info">+55 (31) 99830-7545</a></h6>
            </Col>
        </Row>
        <Row xs={12} style={{paddingTop:'60px', fontWeight:'bold'}}>
            <Col className="center-content">
            <p>And this is my social media</p>
            </Col>
        </Row>
        <Row xs={12}>
            <Col>
            <ContactLinkedIcons className = "center-container"/>
            </Col>
        </Row>
    </Container>
    );
}

export default Contact;