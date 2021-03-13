import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import '../portfolio.css'
import fec from '../images/fec.png';
import sdc from '../images/sdc.png';

const Projects = () => {
    return (
        <Container fluid className="justify-content-center projCon">
            <Row className="justify-content-center">
                <h1 className="fancy-text">My Work</h1>
            </Row>
            <Row className="justify-content-center" >
                <Col className="align-item-center projCol" >
                    <Card className="work-card">
                        <Card.Img variant="top" src={fec} />
                        <Card.Body className="justify-content-center">
                            <Card.Title >Front End E-Commerce Website</Card.Title>
                            <Card.Text>
                                React / JavaScript / Bootstrap / CSS  <a href="https://github.com/earthlymeg/proxy-2/" target="_blank" >[ GitHub ]</a>
                               
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>
                <Col className="align-item-center projCol second">
                <Card className="work-card">
                        <Card.Img variant="top" src={sdc} />
                        <Card.Body className="justify-content-center">
                            <Card.Title>System Design</Card.Title>
                            <Card.Text>
                            JavaScript / PostgreSQL / New Relic / k6 / Docker <a href="https://github.com/Teddi-s-Angels/meg-sdc" target="_blank" >[ GitHub ]</a>
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