import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className="notfound">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Button style={{marginLeft:"45%"}} className="btn btn-primary rounded"><Link className="text-decoration-none text-white" to="/home">Back To Home</Link></Button>
        </div>
    );
};

export default NotFound;