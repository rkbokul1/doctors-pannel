import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p>
                    {slots.length>0 
                    ?<span>{slots[0]}</span>
                    :<span className='text-red-500'>No Slot Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length===0} className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">BOOKED APPOINTMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Service;