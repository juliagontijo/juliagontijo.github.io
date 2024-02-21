import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Projects() {
  return (
    <Container className='full-screen-container'>
        <Row xs={1} md={2} className="center-content">
            {cardData.map((card, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    </Container>
  );
}


const cardData = [
    {
        title: "Project 1",
        imgSrc: "path_to_image_1.jpg",
        text: "Description for Project 1."
    },
    {
        title: "Project 2",
        imgSrc: "path_to_image_2.jpg",
        text: "Description for Project 2."
    },
    {
        title: "Project 3",
        imgSrc: "path_to_image_3.jpg",
        text: "Description for Project 3."
    },
    {
        title: "Project 4",
        imgSrc: "path_to_image_4.jpg",
        text: "Description for Project 4."
    }
];


export default Projects;