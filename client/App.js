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
                            <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
                                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#home" className="navbar-brand hl">Home</Nav.Link>
                                        <Nav.Link href="#about" className="navbar-brand al">About</Nav.Link>
                                        <Nav.Link href="#projects" className="navbar-brand pl">Work</Nav.Link>
                                        <Nav.Link href="#contact" className="navbar-brand cl">Contact</Nav.Link>


                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <div className="d-lg-none sm-screen">
                            Welcome! I'm Meg 😁 <br></br>
                            <span className="sub-sm">I build web applications.</span>
                            </div>

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