import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card md:max-w-sm lg:max-w-md bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium laborum quia hic! Rerum, beatae repellendus odio laboriosam voluptatem repudiandae harum!</p>

                <div class="my-3 flex items-center">
                    <div>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='ml-5'>
                        <h4>{review.name}</h4>
                        <h5>{review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;