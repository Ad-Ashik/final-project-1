import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Content = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${appointment})`
            }}
        >
            <div className='py-16 text-center'>
                <h2 className='text-secondary text-xl font-bold'>Contact Us</h2>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
                <form className='w-3/12 mx-auto pt-7'>
                    <input type="text" placeholder="Email Address" className="input input-bordered lg:w-full max-w-xs block" />
                    <input type="text" placeholder="Subject" className="input input-bordered lg:w-full max-w-xs block my-5" />
                    <textarea className="textarea textarea-bordered block lg:w-full max-w-xs h-28  mb-9" placeholder="Your message"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Content;