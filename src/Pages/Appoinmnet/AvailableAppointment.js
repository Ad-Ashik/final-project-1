import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [appointment, setAppointment] = useState(null);

    const formaDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formaDate], () =>
        fetch(`https://damp-springs-94125.herokuapp.com/available?date=${formaDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='mt-8 text-secondary flex justify-center lg:text-xl'>Available Appointments on -  {date && format(date, 'PP')}</p>
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
                appointment && <BookingModal
                    setAppointment={setAppointment}
                    date={date}
                    appointment={appointment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;