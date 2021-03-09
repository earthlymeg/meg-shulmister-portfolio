import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import '../portfolio.css'


const Projects = () => {
    return (
        <Container fluid className="justify-content-center">
            <Row className="justify-content-center">
                <h1 className="fancy-text">My Work</h1>
            </Row>
            <Row className="justify-content-center">
                <Col className="justify-content-center work" align="right">
                    <Card className="work-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body className="justify-content-center">
                            <Card.Title style={{textAlign: 'center'}}>Front End E-Commerce Website</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>
                <Col className="justify-content-center work">
                <Card className="work-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>System Design</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row classNam="justify-content-center">
                <Col className="justify-content-center work" align="right">
                <Card className="work-card">
                        <Card.Body>
                            <Card.Title>Spotify Alarm Clock</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="justify-content-center work" align="left">
                <Card className="work-card">
                        <Card.Body>
                            <Card.Title>Front End E-Commerce Website</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;