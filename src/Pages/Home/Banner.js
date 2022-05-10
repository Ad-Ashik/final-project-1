import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBg from '../../assets/images/bg.png'

const Banner = () => {
    return (

        <div class="hero min-h-screen bg-no-repeat bg-center" style={{
            backgroundImage: chairBg,
            height: "500px"

        }}>
            <div class="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src={chair} class="max-w-2xl rounded-lg shadow-2xl object-cover" alt='' />
                <div class="w-1/2">
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;