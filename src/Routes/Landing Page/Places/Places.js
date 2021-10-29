
import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';


const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className="my-5"> <br /> <br />
            <h2 className="display-3 fw-bold text-center my-3">Visit Our Places</h2>
            <hr className="w-25 fw-bold border border-3 border-primary rounded  mx-auto" />
          
            <div className="row my-2">
                {
                    places.map(place=><Place key={place.id} place={place}></Place>).slice(0,8)
                }

            </div>

        </div>

    );
};

export default Places;