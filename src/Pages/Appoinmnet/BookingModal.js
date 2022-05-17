import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, appointment, setAppointment }) => {
    const { _id, name, slots } = appointment;

    const BookingForm = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        setAppointment(null);
        console.log(_id, name, slot)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-secondary mb-12">{name}</h3>
                    <form onSubmit={BookingForm} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-full" />
                        <select name='slot' className="select select-bordered w-full max-w-full">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-full" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;