import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Place.css';

const Place = ({ place }) => {
    const { id, title, thumbnailUrl } = place;
    const history = useHistory();

    const handledetails = (detailsid) => {
        const uri = `/detailsplace/${detailsid}`;
        console.log(uri);
        history.push(uri)
    }
    return (
        <div className="col-md-3 place py-5">
            <Container>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{title.slice(0,20)}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    <Button onClick={() =>
                            handledetails(id)
                        } className="my-1 broder border-primary" variant="primary">Details</Button>
                        <Button className="broder border-primary" variant="primary">Purchase</Button>
                </Card>

            </Container>
        </div>
    );
};

export default Place;