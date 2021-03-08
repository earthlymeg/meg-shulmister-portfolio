import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import './portfolio.css'
import About from './components/About'


const App = () => {

    const [currentY, setcurrentY] = useState(0);
    const [headerView, setheaderView] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
          //console.log(window.pageYOffset)
          setcurrentY(window.pageYOffset)
         
        }
        if (currentY>=50) {
            console.log('currentY > 54')
          setheaderView(false);
        } else {
            setheaderView(true);
        }
      }, [currentY]);
  

    return (
        <div className="App" >
            <Container  >
                <section id="home" className="stuff">
                <nav class="navbar navbar-expand-md fixed-top">
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
                {headerView ? <nav class="navbar fixed-bottom header justify-content-end">
                <span className="header">Meg <br></br>Shulmister</span>
                </nav> : null}
                </section>
            </Container>
            <Container >
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    This is my projects zone
                </section>
                <section id="contact">
                    This is my contact zone
                </section>
                
                </Container>
        </div>
    );
};

export default App;