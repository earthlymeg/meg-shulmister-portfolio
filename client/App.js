import { Row, Col, Grid, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './portfolio.css'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import flower from './images/flower.png';

const App = () => {

    const [currentY, setcurrentY] = useState(0);
    const [headerView, setheaderView] = useState(true);
    const [expanded, setExpanded] = useState(false);



    useEffect(() => {
        window.onscroll = () => {
            //console.log(window.pageYOffset)
            setcurrentY(window.pageYOffset)

        }
        if (currentY >= 50) {
            console.log('currentY > 54')
            setheaderView(false);
        } else {
            setheaderView(true);
        }
    }, [currentY]);


    return (
        <div className="App" >
            <Container fluid>
                <section id="home" className="stuff">
                    <Row className="justify-content-center">
                        <Col>
                            {/* 
                            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                                <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_nav"
                                >
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="main_nav" >
                                    <ul class="nav navbar-nav">
                                        <li><a class="navbar-brand hl" href="#home">
                                            Home
                                        </a></li>
                                        <li><a class="navbar-brand al" href="#about">
                                            About
                                        </a></li>
                                        <li><a class="navbar-brand pl" href="#projects">
                                            Work
                                        </a></li>
                                        <li><a class="navbar-brand cl" href="#contact">
                                            Contact
                                        </a></li>
                                    </ul>
                                </div>
                            </nav> */}
                            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#features">Features</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link href="#deets">More deets</Nav.Link>
                                        <Nav.Link eventKey={2} href="#memes">
                                            Dank memes
      </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                        {/* <Col className="flower"> <img src={flower}/>
</Col> */}
                        <Col>
                            {headerView ? <nav class="navbar fixed-bottom header justify-content-end">
                                <span className="header">Meg <br></br>Shulmister</span>
                            </nav> : null}
                        </Col>
                    </Row>
                </section>
            </Container>
            <Container fluid>

                <section id="about" >
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>

            </Container>
        </div>
    );
};

export default App;