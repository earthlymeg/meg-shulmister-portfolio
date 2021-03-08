import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container fluid className="justify-content-center">
            <Row className="justify-content-center">

            </Row>
            <Row>
                <Col className="contact-col">

                    <div align="center" class="socialbtns">
                        <span className="contact">
                            Connect with me.
                </span>
                        <ul>
                            <li><a href="https://twitter.com/codeLikeALady" target="_blank" class="fa fa-lg fa-twitter"></a></li>
                            <li><a href="https://github.com/earthlymeg" target="_blank" class="fa fa-lg fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/meganshulmister019/" target="_blank"class="fa fa-lg fa-linkedin"></a></li>
                            <li><a href="mailto:meganshulmister@gmail.com" target="_blank" class="fa fa-envelope"></a></li>
                        </ul>
                    </div>


                </Col>
                <Col>

                </Col>
            </Row>

        </Container>
    );
};

export default Contact;