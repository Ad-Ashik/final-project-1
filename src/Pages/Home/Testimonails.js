import React from 'react';
import testimonail from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonails = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            city: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            city: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            city: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <section className='my-52'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-secondary text-xl font-bold mb-2'>Testimonial</h2>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={testimonail} alt="" />
                </div>
            </div>
            <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-1'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonails;