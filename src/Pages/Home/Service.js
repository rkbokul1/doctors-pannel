import React from 'react';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <div className='sm:justify-center'>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;