import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className=" footer bg-dark p-4 mt-5 ">
            <Row className="g-2">
                <Col lg={3} md={6} sm={12}>
                    <div className="about text-white">
                        <h3 className="text-center">About</h3>
                        {/* <img style={{ width: "85px", marginLeft: "110px" }} src={logo} alt="" /> */}
                        <hr className="w-25 fw-bold border border-2 border-white rounded  mx-auto" />
                        <p className="fs-6 text-start ms-5">Tourdaw is a TravelAgency based online platform,where you can Book online  Different Places To Go On a Tour On  your Vacation</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="useful-links text-center text-whit">


                        <ul className="fs-6 text-start ms-5 text-white">
                            <h3>Policy and Others</h3>
                            <hr className="w-25 fw-bold border border-2 border-white rounded" />
                            <li>Privacy Policy</li>
                            <li>Terms Of Services</li>
                            <li>Offers</li>
                            <li>Special Services</li>

                        </ul>


                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="quick-links text-white text-center">
                        <ul className="fs-6 text-start ms-5  text-white">
                            <h3>UseFul Links</h3>
                            <hr className="w-25 fw-bold border border-2 border-white rounded" />
                            <li>About Us</li>
                            <li>Company History</li>
                            <li>Travel Management</li>
                            <li>Places</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="newslater text-white text-center">
                        <h3 className="">Newslater Subscirbe</h3>
                        <hr className="w-25 fw-bold border border-2 border-white rounded  mx-auto" />
                        <h5 className="ms-5">Subscribe Our Newsalter</h5>
                        <input className="ms-3 p-2 rounded" type="email" name="email" id="email" placeholder="your-email" />
                        <button className="btn p-2 btn-primary rounded ms-2">Submit</button>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;