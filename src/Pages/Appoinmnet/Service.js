import React from 'react';

const service = ({ service, setAppointment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title block text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>Try another Date.</span>
                    }
                </p>
                <p><small>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</small></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setAppointment(service)} disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default service;