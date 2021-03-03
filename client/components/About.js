import React from 'react';
import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import '../portfolio.css'

function About(props) {
    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center about">
                <h1>About</h1>
            </Row>
            <Row>
                <Col className="justify-content-center info">
                    <h2>Thank you for being here.</h2>
                    <br></br>
                    
            </Col>
            <Col style={{backgroundColor: 'blue'}}>
            Photo
                </Col>
            </Row>


        </Container>

    );
}

export default About;