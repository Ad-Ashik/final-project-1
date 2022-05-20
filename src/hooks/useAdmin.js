import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adimnLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:1111/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user]);

    return [admin, adimnLoading];
}

export default useAdmin;