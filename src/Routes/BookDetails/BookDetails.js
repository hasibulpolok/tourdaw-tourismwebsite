import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetails = ({ book }) => {
    const { Title, Price, Image, User, _id, Status, Description } = book;

    // Delete a Booking
    const handledeletebooking = id => {
        const decision = window.confirm("Are you sure want to delete ?")
        if (decision) {
            const uri = `https://tourdaw-server.herokuapp.com/book/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Service Delete Successfully')
                        window.location.reload()

                    }
                })
        }
    }



    return (
        <div className="col-md-3">
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            {Description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><span className="fw-bold">Booking Id</span> : {_id}</ListGroupItem>
                        <ListGroupItem><span className="fw-bold">Price </span>: {Price}</ListGroupItem>
                        <ListGroupItem><span className="fw-bold">Orderd By </span>:{User}</ListGroupItem>
                        <ListGroupItem><span className="fw-bold">Status </span>:<Button className="btn btn-danger text-white ms-2 rounded">{Status}</Button></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button onClick={() => handledeletebooking(_id)} className="btn btn-danger rounded text-white">Remove Booking</Button>
                        <Button className="btn btn-Primary rounded text-white ms-2"><Link to={`/update/${_id}`} className="text-decoration-none text-white">Approve</Link></Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default BookDetails;