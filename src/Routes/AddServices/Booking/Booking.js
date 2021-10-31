import React, { useEffect, useState } from 'react';
import BookDetails from '../../BookDetails/BookDetails';

const Booking = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://tourdaw-server.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div className="my-5"> <br /> <br />
            <h2 className="display-3 fw-bold text-center text-primary my-3">All Bookings</h2>


            <div className="row my-2 g-1">
                {
                    booking.map(book => <BookDetails key={book._id} book={book}></BookDetails>)
                }

            </div>

        </div>

    );
};

export default Booking;