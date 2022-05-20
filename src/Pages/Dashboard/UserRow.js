import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, roll } = user;

    const makeAdmin = () => {
        fetch(`https://damp-springs-94125.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`You can't Set Addmin`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Set Addmin "${email}"`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

            });

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>

                {
                    roll !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> :
                        roll === 'admin' && <button class="btn btn-success btn-xs">Admin own</button>
                }

            </td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>

    );
};

export default UserRow;