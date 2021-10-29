import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import { useLocation } from 'react-router';

const Register = () => {

    const location = useLocation();

    const { sigInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, setIsLoading } = useAuth();
    const uri = location.state?.from || '/home';
    const history = useHistory();

    const gtosignin = () => {
        sigInUsingGoogle().then(result => {

            history.push(uri)
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const registerwithmail = (e) => {
        handleRegistration().then(result => {
            const user = result.user;
            history.push(uri);
        })
            .finally(() => {
            setIsLoading(false);
        })
        e.preventDefault();
    }

    // fontawesome icon
    const google = <FontAwesomeIcon className="fs-5 text-white" icon={faGoogle} />;
    return (
        <div className="m-5">

            <div className="my-5">
                <br />




                <h2 className="text-center m-2"> Please Register</h2>
                <br />
                <Container className="mt-2">
                    <center><Form onSubmit={registerwithmail}>
                        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">

                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">

                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group onBlur={handlePasswordChange} className="mb-3 w-25" controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit
                        </Button>
                    </Form></center>
                </Container>
                <br />


                <div className="text-center">
                    <p >Already Registred? <Link to="/login">Login Here</Link></p>

                    <p className="fs-3">Or sign in Using </p>
                    <hr className='w-25 mx-auto border border-2 border-primary' />
                    <button onClick={gtosignin} className="btn border border-2 border-white btn-primary fw-bold fs-5 text-white rounded ">{google}oogle</button>
                </div>

            </div>
        </div>
    );
};

export default Register;