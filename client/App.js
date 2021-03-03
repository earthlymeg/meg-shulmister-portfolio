import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import React from 'react';
import './portfolio.css'


const App = () => {
    return (
        <div className="App">
            <Container >
                <nav class="navbar navbar-light bg-dark">
                    <a class="navbar-brand" href="#">
                        Home
                    </a>
                    <a class="navbar-brand" href="#about">
                        About
                    </a>
                    <a class="navbar-brand" href="#projects">
                        Projects
                    </a>
                    <a class="navbar-brand" href="#contact">
                        Contact
                    </a>
                </nav>
                <nav class="navbar fixed-bottom header justify-content-end">
                <span className="header">I'm <br></br>Meg <br></br>Shulmister</span>
                </nav>
                {/* <section id="about">
                    This is my about zone
                </section>
                <section id="projects">
                    This is my projects zone
                </section>
                <section id="contact">
                    This is my contact zone
                </section>
                 */}
                
                
                
        
                {/* <div className="nav"> */}
                {/* </div> */}
            </Container>
        </div>
    );
};

export default App;