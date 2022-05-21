import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentHero from './AppointmentHero';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <AppointmentHero/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;