import React from 'react';
import appointment from '../../assets/images/appointment.png';
import smallDoctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Expart = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row">
                <img src={smallDoctor} className="max-w-sm rounded-lg shadow-2xl lg:ml-52" alt='' />
                <div className='lg:ml-28'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Expart;