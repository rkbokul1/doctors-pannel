import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <InfoCard cardTitle="Opening Hours" bgClass='bg-gradient-to-r from-secondary to-primary' img={clock} />
                <InfoCard cardTitle="Visit Our Location" bgClass='bg-neutral' img={marker} />
                <InfoCard cardTitle="Contact Us" bgClass='bg-gradient-to-r from-secondary to-primary' img={phone} />
            </div>
        </div>
    );
};

export default Info;