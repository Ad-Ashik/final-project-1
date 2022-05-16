import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date, showDate }) => {
    const [services, setServices] = useState([]);
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='mt-8 text-secondary flex justify-center lg:text-xl'>Available Appointments on-  {showDate}</p>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mt-24 lg:mb-32 my-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setAppointment={setAppointment}
                    ></Service>)
                }
            </div>
            {
                appointment && <BookingModal setAppointment={setAppointment} date={date} appointment={appointment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;