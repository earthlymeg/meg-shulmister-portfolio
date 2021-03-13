/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <Container fluid className="justify-content-center">
    <Row className="justify-content-center conRow" />
    <Row>
      <Col className="contact-col justify-content-lg-center">

        <div align="center" className="socialbtns">
          <span className="contact">
            Connect with me.
          </span>
          <ul>
            <li><a href="https://twitter.com/codeLikeALady" target="_blank" className="fa fa-lg fa-twitter" /></li>
            <li><a href="https://github.com/earthlymeg" target="_blank" className="fa fa-lg fa-github" /></li>
            <li><a href="https://www.linkedin.com/in/meganshulmister019/" target="_blank" className="fa fa-lg fa-linkedin" /></li>
            <li><a href="mailto:meganshulmister@gmail.com" target="_blank" className="fa fa-envelope" /></li>
          </ul>
        </div>

      </Col>
    </Row>

  </Container>
);

export default Contact;
