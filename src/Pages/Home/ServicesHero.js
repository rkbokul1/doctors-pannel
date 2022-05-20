import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../../Components/PrimaryButton';

const ServicesHero = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="sm:max-w-sm md:min-w-sm rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesHero;