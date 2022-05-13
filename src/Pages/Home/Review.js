import React from 'react';

const Review = ({ review }) => {
    const { name, city, reviews, img } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <div className="card-body">
                <p>{reviews}</p>
                <div className="flex items-center mt-3">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold'>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;