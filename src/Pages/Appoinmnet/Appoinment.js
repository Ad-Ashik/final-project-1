import { format } from 'date-fns';
import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    let showDate;
    if (date) {
        showDate = <p className='text-center pb-3'> {format(date, 'PP')}</p>;
    }
    return (
        <div className='p-12 lg:p-3'>
            <AppoinmentBanner date={date} setDate={setDate} showDate={showDate}></AppoinmentBanner>
            <AvailableAppointment date={date} showDate={showDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;