import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../context/useAuth'
import { useLocation } from 'react-router';




const Login = () => {
    const location = useLocation();
    const { sigInUsingGoogle, handleSignIn, handleEmailChange, handlePasswordChange, setUser,setIsLoading } = useAuth();
    const uri = location.state?.from || '/home';
    const history = useHistory();

    const gtosignin = () => {
        sigInUsingGoogle().then(result => {
            setIsLoading(true);
            history.push(uri)
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const signinwithmail = (e) => {
        handleSignIn().then(result => {
            setIsLoading(true);
            const user = result.user;
            history.push(uri);

        }).finally(() => {
            setIsLoading(false);
        })
        e.preventDefault();
    }



    const google = <FontAwesomeIcon className="fs-5 text-white" icon={faGoogle} />;
    return (
        <div className="my-5 p-3">



            <h2 className="text-center"> Please Login</h2>
            <br />
            <Container className="mt-2">
                <center><Form onSubmit={signinwithmail}>
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
                <button onClick={gtosignin} className="btn border border-2 border-white btn-primary fw-bold fs-5 text-white rounded ">{google}oogle</button>
            </div>

        </div>
    );
};

export default Login;