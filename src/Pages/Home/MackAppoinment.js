import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MackAppoinment = () => {
    return (
        <section
            className='flex justify-center items-center lg:mt-52'
            style={{
                backgroundImage: `url(${appointment})`
            }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl text-secondary font-bold'>Appointment</h2>
                <h2 className='font-semibold text-4xl text-white my-5'>Make an appointment Today</h2>
                <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MackAppoinment;