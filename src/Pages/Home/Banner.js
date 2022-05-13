import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (

        <div className="hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse lg:justify-evenly">
                <img src={chair} className="max-w-2xl rounded-lg shadow-2xl object-cover" alt='' />
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Banner;