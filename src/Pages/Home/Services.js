import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Fluoride treatments are typically professional treatments containing .",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "A cavity filling is when the dentist fills the opening in your tooth .",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's .",
            img: teeth,
        }
    ];
    return (
        <div className='mt-32 mb-40'>
            <div className='text-center'>
                <h3 className='text-secondary font-bold text-xl'>OUR SERVICES</h3>
                <h2 className='text-4xl text-accent mb-16'>Services We Provide</h2>
            </div>
            <div className='container grid gap-4 lg:grid-cols-3 mx-auto sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;