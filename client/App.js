import { Row, Col, Grid, Container, navbar } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import './portfolio.css'
import About from './components/About'
import Contact from './components/Contact'


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
                <nav class="navbar navbar-expand-md">
                    <a class="navbar-brand hl" href="#">
                        Home
                    </a>
                    <a class="navbar-brand al" href="#about">
                        About
                    </a>
                    <a class="navbar-brand pl" href="#projects">
                        Projects
                    </a>
                    <a class="navbar-brand cl" href="#contact">
                        Contact
                    </a>
                </nav>
                {headerView ? <nav class="navbar fixed-bottom header justify-content-end">
                <span className="header">Meg <br></br>Shulmister</span>
                </nav> : null}
                </section>
            </Container>
            <Container >
                <section id="about" > 
                    <About />
                </section>
                <section id="projects">
                    This is my projects zone
                </section>
                <section id="contact">
                    <Contact />
                </section>
                
                </Container>
        </div>
    );
};

export default App;