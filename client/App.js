/* eslint-disable react/jsx-filename-extension */
import {
  Row, Col, Navbar, Nav,
} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 20% !important;
  border-color: pink;
`;

// eslint-disable-next-line consistent-return
const App = () => {
  const [currentY, setcurrentY] = useState(0);
  const [headerView, setheaderView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  useEffect(() => {
    window.onscroll = () => {
      // console.log(window.pageYOffset)
      setcurrentY(window.pageYOffset);
    };
    if (currentY >= 50) {
      setheaderView(false);
    } else {
      setheaderView(true);
    }
  }, [currentY]);

  if (!isLoading) {
    return (

      <div className="App">
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

                <br />
                {' '}
                Meg Shulmister
                {' '}
                <br />
                <br />
                <span className="e">I build web applications.</span>

              </div>

            </Col>
            {headerView ? (
              <nav className="navbar fixed-bottom header justify-content-end">
                <span className="header">
                  Meg
                  <br />
                  Shulmister
                </span>
              </nav>
            ) : null}

          </Row>
        </section>

        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

      </div>

    );
  }

  if (isLoading) {
    return (
      <div className="sweet-loading">

        <ClipLoader color={color} loading={loading} css={override} size={150} />
      </div>
    );
  }
};

export default App;
