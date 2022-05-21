import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../../Components/PrimaryButton';
import bgchair from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div style={{background: `url(${bgchair})`} } >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="sm:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;