import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth'


const Login = () => {
    const { sigInUsingGoogle, handleSignIn, handleEmailChange, handlePasswordChange } = useAuth();



    const google = <FontAwesomeIcon className="fs-5 text-white" icon={faGoogle} />;
    return (
        <div className="my-5">
            <br />


            <h2 className="text-center m-2"> Please Login</h2>
            <br />
            <Container className="mt-2">
                <center><Form onSubmit={handleSignIn}>
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
                <p >Don't have an Account? <Link to="/register">Register Here</Link></p>

                <p className="fs-3">Or sign in Using </p>
                <hr className='w-25 mx-auto border border-2 border-primary' />
                <button onClick={sigInUsingGoogle} className="btn border border-2 border-white btn-primary fw-bold fs-5 text-white rounded ">{google}oogle</button>
            </div>

        </div>
    );
};

export default Login;