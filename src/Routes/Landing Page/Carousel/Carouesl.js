import React from 'react';
import { Carousel} from 'react-bootstrap';
import img1 from '../../../images/img-1.jpg';
import img2 from '../../../images/img-2.jpg';
import img3 from '../../../images/img-3.jpg';

const Carouesl = () => {
    return (
        <div>
            
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-white">
                        <h5>Travel The Cities</h5>
                        <p>Travel the cities inside Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-white">
                        <h5>Special offer</h5>
                        <p>Travel with low cost and free food</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-white"> 
                        <h5>Enjoy your life</h5>
                        <p>Travelling is joy of our life, so come and join us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
        </div>
    );
};

export default Carouesl;