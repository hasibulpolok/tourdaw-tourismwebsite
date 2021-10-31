import userEvent from '@testing-library/user-event';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const ApproveBooking = () => {
    
    const [approve, setApprove] = useState({})
    const {id} = useParams();
    

    useEffect(() => {
        const url = `https://tourdaw-server.herokuapp.com/book/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setApprove(data));

    },[]);

    const handleStatusChange = e =>{
        const updateStatus = e.target.value;
        const updated = {Status:updateStatus}
        setApprove(updated);
    }

    const handleapprove= e =>{
        const url = `https://tourdaw-server.herokuapp.com/book/${id}`;
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(approve)
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                alert(' Successfully')
                

            }
        })
        e.preventDefault();
    }

    return (
        <div className="mt-5">
            <br /><br />
            <h3 className="display-3 text-primary text-center">Approve Status {approve.Title}</h3>
            <h4 className="text-center">Update {approve.Title} Order-Status {approve.Status}</h4>
            <br />

            <form onSubmit={handleapprove} className="text-center">
                <input onChange={handleStatusChange} className="p-2 border border-2 border-dark" type="text"   value={approve.Status || ''}/>
                <input className="p-2 ms-2 bg-primary rounded text-white"  type="submit" value="Change" />
            </form>
        </div>
    );
};

export default ApproveBooking;