import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServicesHero from './ServicesHero';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing aliquam vitae sit ab natus.',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing aliquam vitae sit ab natus.',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing aliquam vitae sit ab natus.',
            img: whitening,
        },
    ];

    return (
        <div className='mx-auto my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold uppercase'>This is Services</h2>
                <h2 className='text-3xl'>Services With Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-12'>
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </div>
            <ServicesHero/>
        </div>
    );
};

export default Services;