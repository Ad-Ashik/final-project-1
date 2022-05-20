import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:1111/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center py-4 text-xl'>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table md:table-normal table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>TIME</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.appointmentName}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.date}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;