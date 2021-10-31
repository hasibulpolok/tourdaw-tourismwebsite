import React, { useEffect, useState } from 'react';

const Booking = () => {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        fetch('https://tourdaw-server.herokuapp.com/book')
        .then(res=>res.json)
        .then(data=>setBook(data))
    },[])
    return (
        <div className="my-5">
            <h2 className="display-3 mt-5 text-primary text-center">Places That Have Been Booked</h2>

            


        </div>
    );
};

export default Booking;