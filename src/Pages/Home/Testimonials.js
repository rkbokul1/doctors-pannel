import React from 'react';

import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name:'Windson Herry',
            review: '',
            location : 'califonia',
            img: people1,

        },
        {
            _id: 2,
            name:'Jack Thomas',
            review: '',
            location : 'Canada',
            img: people2,

        },
        {
            _id: 3,
            name:'Ulu Bilgey',
            review: '',
            location : 'Chaina',
            img: people3,

        },
    ]
    return (
        <section className='pt-5'>
            <div className='flex justify-between my-5'>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h2>What our Patients says!</h2>
                </div>
                <div>
                    <img className='w-10 md:w-20' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;