
import React, { useEffect, useState } from 'react';
import { Card, Button, Badge, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';

const ManageAll = () => {
    const [allorders, setAllorders] = useState([]);

    useEffect(() =>
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllorders(data))
        , [])

        


    return (
        <div className="mt-5">
            <br /><br /><br />
            <h3 className="display-3 text-center mb-3"> Manage All orders from here</h3>
            <Container>
                <Card>
                    <Card.Header className="  d-flex justify-content-between align-items-start "><span><strong>Orders</strong></span>  <span><span className="bg-danger p-2 rounded text-white"><b>Delete</b></span> <span className="ms-2 bg-primary p-2 rounded text-white"> <b>Approve</b> </span></span></Card.Header>
                    <Card.Body>

                        <Card.Text>
                            <ListGroup as="ol" numbered>

                                {
                                    allorders.map(allorder => <ManageAllOrder key={allorder.id}
                                        allorder={allorder}></ManageAllOrder>)
                                }

                            </ListGroup>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="primary">

                            <Link to="/home" className="text-decoration-none text-white ">Back To Home</Link>


                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default ManageAll;