import { Row, Col, Grid, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './portfolio.css'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import flower from './images/flower.png';
import paw from './images/paw.png'
import ClipLoader from "react-spinners/ClipLoader";


const App = () => {

    const [currentY, setcurrentY] = useState(0);
    const [headerView, setheaderView] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false), []
        }, 1000)
    }
    );


    useEffect(() => {
        window.onscroll = () => {
            //console.log(window.pageYOffset)
            setcurrentY(window.pageYOffset)

        }
        if (currentY >= 50) {
            setheaderView(false);
        } else {
            setheaderView(true);
        }
    }, [currentY]);


    if (!isLoading) {
    return (
       

        <div className="App" >
            {/* <Container fluid> */}
         
            <section id="home">
                <Row className="justify-content-center">
                    <Col>
                        <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
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
                            <span className="welcome">Welcome! I am</span>

                            <br></br> Meg Shulmister <br></br><br></br>
                            <span className="e">I build web applications.</span>
                            {/* <span class="fa-stack fa-3x">
            <i className="fa fa-heart"></i>
            <span class="fa fa-stack-1x">
            <span className="text-heart">
            
            </span>
            </span>
        </span> */}
                        </div>

                    </Col>
                    {headerView ? <nav class="navbar fixed-bottom header justify-content-end">
                        <span className="header">Meg <br></br>Shulmister</span>
                    </nav> : null}
                    {/* <Col className="flower"> <img src={flower}/>
    </Col> */}
                    {/* <Col className="col2">
    <div align="right" className="paw">
    <img src={paw} className="paw"></img>
    </div>
</Col> */}
                </Row>
            </section>
            {/* </Container> */}
            {/* <Container fluid> */}

            <section id="about" >
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>

            {/* </Container> */}
        </div>
    

)};

if (isLoading) {
    return (
        <ClipLoader loading={isLoading} />
    );
}
};

export default App;