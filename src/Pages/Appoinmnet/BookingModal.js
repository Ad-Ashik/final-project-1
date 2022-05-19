import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, appointment, setAppointment, refetch }) => {
    const { _id, name, slots } = appointment;
    const [user] = useAuthState(auth);

    const formaDate = format(date, 'PP');

    const BookingForm = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        console.log(_id, name, slot);

        const booking = {
            appointmentId: _id,
            appointmentName: name,
            date: formaDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: e.target.phone.value
        }

        fetch('http://localhost:1111/booking', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success(`Appointment set "${slot}"`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else {
                    toast.error(`"${data.booking?.date}" Already have an appointment "${data.booking?.slot}"`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                refetch();
                setAppointment(null);
            })



    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-secondary mb-12">{name}</h3>
                    <form onSubmit={BookingForm} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date && format(date, 'PP')} className="input input-bordered w-full max-w-full" />
                        <select name='slot' className="select select-bordered w-full max-w-full">
                            {/* make loding code*/
                                /* !slots ? <div>loding</div> : */}
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName || ''} name='name' placeholder="Full Name" className="input input-bordered w-full max-w-full" disabled />
                        <input type="email" value={user?.email || ''} name='email' placeholder="Email" className="input input-bordered w-full max-w-full" disabled />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-full" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;