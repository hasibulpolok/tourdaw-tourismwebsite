import React, { useRef } from 'react';
import { Container, Form,Button } from 'react-bootstrap';

const AddServices = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAdService=(e)=>{
        
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        const newservice = {title,desc,price,img};
        fetch('https://tourdaw-server.herokuapp.com/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newservice)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Service Added Successfully')
                e.target.reset();
            }
        })
        
        e.preventDefault();
        
        
    }
    return (
        <div className="mt-5">
            <br />
            <div className="mt-5">

                <h3 className="text-center text-primary "> Add a New Place</h3>
                <Container>
                    <Form onSubmit={handleAdService}>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formGroup">
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="w-70 mx-auto" ref={titleRef} type="title" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formGroup">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="w-70 mx-auto"ref={descRef} type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formGroup">
                            <Form.Label>Price</Form.Label>
                            <Form.Control className="w-70 mx-auto" ref={priceRef} type="number" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formGroup">
                            <Form.Label>Image</Form.Label>
                            <Form.Control className="w-70 mx-auto" ref={imgRef} type="text" placeholder="photo url" />
                        </Form.Group>
                        <Button style={{marginLeft:"25%"}} variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Container>
            </div>

        </div>
    );
};

export default AddServices;