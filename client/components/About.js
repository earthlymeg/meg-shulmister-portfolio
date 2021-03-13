/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../portfolio.css';
import Meg from '../images/headshot.jpg';

function About() {
  return (
    <Container fluid className="justify-content-center aboutback">
      <Row className="justify-content-center about">
        <h1 className="fancy-text">About</h1>
      </Row>
      <Row className="justify-content-sm-center">
        <Col sm={6} style={{ paddingLeft: 50 }}>
          {/* <i class="fab fa-pagelines"></i>  */}
          <h2 className="reg-text">Thank you for being here.</h2>
          <br />
          <h4 className="reg-text">My name is Meg and I'm a Front-End Developer based out of Boulder, Colorado.</h4>
          <br />
          <span className="reg-text">
            I enjoy making beautiful, responsive applications with powerful tools like React and Bootstrap.
            <br />
            <br />
            I am inspired by the natural world around me and the opportunity to use technology to make the
            Earth a better place for all.
            <br />
            <br />
            <i className="fa fa-star" />
            <strong>Front-End:</strong>
            {' '}
            JavaScript (ES5/ES6), React, CSS, HTML, Bootstrap
            <br />

            <i className="fa fa-star" />
            <strong>Back-End:</strong>
            {' '}
            Node.js, Express, MySQL, PostgreSQL, MongoDB
            <br />
            <i className="fa fa-star" />
            <strong>Tools:</strong>
            {' '}
            Git, Webpack, Babel, Docker, Heroku, npm, Jest
            <br />
            <i className="fa fa-star" />
            <strong>Techniques:</strong>
            {' '}
            Agile Development, RESTful Design
            <br />
            <br />

            My passions include veganism, naturalism, spirituality, yoga, community-development, and so much more.
            <br />
            <br />
          </span>
          <h4 className="fancy-text">
            I am always looking to make more meaningful connections.
            <br />
            <br />
          </h4>
        </Col>
        <Col sm={6} className="justify-content-center headshotCol">
          <img src={Meg} alt="Meg" className="headshot" />
        </Col>
      </Row>

    </Container>

  );
}

export default About;
