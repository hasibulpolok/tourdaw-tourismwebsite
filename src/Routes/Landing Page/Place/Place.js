import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Place.css';

const Place = ({ place }) => {
    const { _id, title, img,desc } = place;
    const history = useHistory();

    const handledetails = (detailsid) => {
        const uri = `/detailsplace/${detailsid}`;
        // console.log(uri);
        history.push(uri)
    }
    return (
        <div className="col-md-3 place py-5">
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{width:"100%",height:"200px"}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title.slice(0,20)}</Card.Title>
                        <Card.Text>
                            {desc.slice(0,150)}
                        </Card.Text>
                        
                    </Card.Body>
                    <Button onClick={() =>
                            handledetails(_id)
                        } className=" broder border-primary" variant="primary">Details</Button>
                        {/* <Button className="broder border-primary" variant="primary">Purchase</Button> */}
                </Card>

            </Container>
        </div>
    );
};

export default Place;