import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({ date, setDate, showDate }) => {

    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl lg:ml-28 object-contain" alt='' />
                <div className='shadow-lg rounded-2xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    {showDate}
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;