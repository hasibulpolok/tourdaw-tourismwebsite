import React from 'react';
import { Col, Form, Row,Button, Container } from 'react-bootstrap';

const ContacUs = () => {
    return (
        <div className="my-5">
            <br /><br />
            <h3 className="display-3 text-center text-primary"> Contact Us</h3>
            <div className="row mt-5">
                <div className="col-md-6 text-center">
                    <Container>
                        <h3 className="display-3 fw-bold">Our Address</h3>
                    <address className="display-5 ">Rangpur Sadar</address>
                    <address className=" ms-5 fs-4 ">Cigarate Company More</address>
                    <address className=" ms-5 fs-4 ">Taltola Masjid,BaharKachna</address>
                    <address className=" ms-5 fs-4 ">Rangpur Bangladesh</address>
                    </Container>
                </div>
                <div className="col-md-6">
                    <Container>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Rangpur</option>
                                    <option>Dhaka</option>
                                    <option>Bogura</option>
                                    <option>Domar</option>
                                    <option>Nilphamari</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ContacUs;