import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
// import useAuth from '../../../context/useAuth';




const PlaceDetails = () => {

    const { id } = useParams();
    const { user } = useFirebase()

    const [details, setDetails] = useState([]);
    const [singledetails, setSingledetails] = useState({});
    const { title, desc, img, price } = singledetails;

    useEffect(() => {
        fetch('https://tourdaw-server.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matched = details.find(detail => detail._id == id)
            setSingledetails(matched);
        }
    }, [details]);


    const handlebook = () => {

        const bookdetails = {
            Title: title,
            Price: price,
            Image: img,
            Description:desc,
            User: user.email,
            Status: "Pending"
        };
        fetch('https://tourdaw-server.herokuapp.com/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookdetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booked Successfully');
                }
            })

    }




    return (
        <div className="my-5">
            <br />
            <h1 className="text-center display-2 fw-bold text-uppercase text-primary ">Know more about this place</h1>
            <Container>
                <Card className="mx-auto mt-5" style={{ width: '60%', marginBottom: "5px" }}>
                    <Card.Img style={{ height: "250px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p><i><strong>Price: {price} TK</strong></i></p>
                        <Card.Text>
                            <p>{desc}</p>
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={handlebook} className="btn btn-primary rounded">Purchase Service</Button>
                    <Button className=" mt-2 btn btn-primary rounded"><Link className="text-white text-decoration-none" to="/places">Back To Places</Link></Button>
                </Card>
            </Container>
        </div>
    );
};

export default PlaceDetails;