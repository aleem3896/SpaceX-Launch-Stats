import React from 'react';

export default function LaunchItem({ launch: {flight_number, mission_name, launch_date_local, launch_success} }){
    return (
        <div className="card card-boddy mb-3">
        <div className="row">
        <div>
            <h4>Mission: {mission_name}</h4>
            <p>Date: {launch_date_local}</p>
        </div>
        <div className="btn btn-s">
            <button className= "btn btn-seconday">Launch Details</button>
        </div>
        </div>
    </div>
    );
    
}