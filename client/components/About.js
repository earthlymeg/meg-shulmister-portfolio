import React from 'react';
import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import '../portfolio.css'
import Meg from '../images/headshot.jpg';

function About(props) {
    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center about">
                <h1>About</h1>
            </Row>
            <Row>
                <Col className="justify-content-center info">
                {/* <i class="fab fa-pagelines"></i>  */}
                    <h2>Thank you for being here.</h2>
                    <br></br>
                    <h3>My name is Meg and I'm a Front-End Deve</h3>
                    <br></br>
                    <h3>I am inspired by the natural world around me</h3>
            </Col>
            <Col>
            <img src={Meg} alt="Meg" className="headshot"/>
                </Col>
            </Row>


        </Container>

    );
}

export default About;