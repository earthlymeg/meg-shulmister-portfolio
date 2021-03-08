import React from 'react';
import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import '../portfolio.css'
import Meg from '../images/headshot.jpg';
import leaves from '../images/leaves.png'

function About(props) {
    return (
        <Container fluid className="justify-content-center aboutback" >
            <Row className="justify-content-center about">
                <h1 className="fancy-text">About</h1>
            </Row>
            <Row className="justify-content-sm-center">
                <Col sm={6} style={{backgroundColor:"pink"}}>
                    {/* <i class="fab fa-pagelines"></i>  */}
                    <h2 className="reg-text">Thank you for being here.</h2>
                    <br></br>
                    <h4 className="reg-text">My name is Meg and I'm a Front-End Developer based out of Boulder, Colorado.</h4>
                    <br></br>
                    <span className="reg-text">
                    I enjoy making beautiful, responsive applications with powerful tools like React and Bootstrap.
                    <br></br>
                    <br></br>
                    I am inspired by the natural world around me and the opportunity to use technology to make the
                    Earth a better place for all.
                    <br></br><br></br>
                   
                    My passions include veganism, naturalism, spirituality, yoga, community-development, and so much more.
                    <br></br><br></br>
                    </span>
                    <h4 className="fancy-text">I am always looking to make more meaningful connections.
                        <br></br><br></br></h4>
                </Col>
                <Col sm={6} className="justify-content-center" style={{backgroundColor:"yellow"}}>
                    <img src={Meg} alt="Meg" className="headshot" />
                </Col>
            </Row>


        </Container>

    );
}

export default About;