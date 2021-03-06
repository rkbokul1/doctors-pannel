import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {

    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='text-center mt-10'>
            <h2 className='text-primary font-bold'>Availavle service on: {format(date, 'PP')}</h2>            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;