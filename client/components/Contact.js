import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center">
                <span className="contact">
                    Connect with me.
                </span>
            </Row>
            <Row>
                <Col>
                    socials
                </Col>
                <Col>
                    <form className="contact-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="validationCustom01">Full Name</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Your Name" value="Mark" required />
                            </div>
                        </div>
                        <div class="form-group">

                        <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </Col>
            </Row>

        </Container>
    );
};

export default Contact;