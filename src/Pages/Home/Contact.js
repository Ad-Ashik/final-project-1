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
                <form className='pt-7'>
                    <div>
                        <input type="text" placeholder="Email Address" className="input input-bordered w-9/12 max-w-md" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="input input-bordered w-9/12 max-w-md my-5" />
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered w-9/12 max-w-md h-28  mb-9" placeholder="Your message"></textarea>
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Content;