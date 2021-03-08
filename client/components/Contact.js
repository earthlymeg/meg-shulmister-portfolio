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
                            <li><a href="#" class="fa fa-lg fa-github"></a></li>
                            <li><a href="#" class="fa fa-lg fa-linkedin"></a></li>
                            <li><a href="#" class="fa fa-envelope"></a></li>
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