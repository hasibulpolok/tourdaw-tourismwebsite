import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const PlaceDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [singledetails, setSingledetails] = useState({});
    const {title,desc,img,price} = singledetails;

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matched = details.find(detail => detail._id == id)
            setSingledetails(matched);
        }
    }, [details])


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
                    <Button className="btn btn-primary rounded">Purchase Service</Button>
                </Card>
            </Container>
        </div>
    );
};

export default PlaceDetails;