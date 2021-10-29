import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const PlaceDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [singledetails, setSingledetails] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matched = details.find(detail => detail.id == id)
            setSingledetails(matched);
        }
    }, [details])


    return (
        <div className="my-5">
            <br />
            <h1 className="text-center display-2 fw-bold text-uppercase text-primary ">Know more about this place</h1>
            <Container>
                <Card className="mx-auto mt-5" style={{ width: '60%', marginBottom: "5px" }}>
                    <Card.Img style={{ height: "250px" }} variant="top" src={singledetails.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{singledetails.title}</Card.Title>
                        <p><i>Price:100 $</i></p>
                        <Card.Text>
                            {singledetails.title}
                        </Card.Text>
                    </Card.Body>
                    <Button className="btn btn-primary rounded">Purchase Service</Button>
                </Card>
            </Container>
        </div>
    );
};

export default PlaceDetails;