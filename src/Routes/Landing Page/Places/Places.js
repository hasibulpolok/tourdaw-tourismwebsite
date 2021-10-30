
import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';


const Places = ({children}) => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://tourdaw-server.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className="my-5"> <br /> <br />
            <h2 className="display-3 fw-bold text-center text-primary my-3">{children}</h2>
            

            <div className="row my-2 g-2">
                {
                    places.map(place => <Place key={place.id} place={place}></Place>).slice(0, 8)
                }

            </div>

        </div>

    );
};

export default Places;