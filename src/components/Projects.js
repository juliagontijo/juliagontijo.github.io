import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <Container className='full-screen-container'>
        <Row xs={1} md={2} className="center-content">
            {cardData.map((card, idx) => (
                <Col key={idx}>
                <Card>
                <Card.Header>{card.header}</Card.Header>
                    {/* <Card.Img variant="top" src={card.imgSrc} /> */}
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <hr />
                        <Card.Text>{card.text}</Card.Text>
                        <Button variant="primary" href={card.link}>Check project</Button>
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
        header: "Undergraduate Research",
        title: "DensePCP - Density-Driven Plausible Counterfactual and Path",
        // imgSrc: "profile-photo.jpg",
        link: "https://github.com/juliagontijo/Plausible_CF/blob/master/DensePCP_CSSEextension_priorsubmission.pdf",
        text: "An extension of CSSE–a genetic algorithm for counterfactual generation–where counterfactual candidates are evaluated using a novel density metric, and their generation process is inferred using the densest trajectory between original instance and final counterfactual. This ensured that counterfactuals aligned with feature combinations commonly observed in real-world data, as dense regions represent plausible feature value distributions."
    },
    {
        header: "Self study",
        title: "LLaMA tuning for code generation",
        // imgSrc: "path_to_image_2.jpg",
        link: "https://github.com/juliagontijo/self_study/tree/main/Projects",
        text: "fine-tuned LLaMA to improve its code generation capability, handling everything from data preparation and quality filtering, to training the model and iterating on the ML health of the training run."
    },
    // {
    //     title: "Project 3",
    //     imgSrc: "path_to_image_3.jpg",
    //     text: "Description for Project 3."
    // },
    // {
    //     title: "Project 4",
    //     imgSrc: "path_to_image_4.jpg",
    //     text: "Description for Project 4."
    // }
];


export default Projects;