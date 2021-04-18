import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../../App'

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const url = "https://hidden-hollows-18643.herokuapp.com/isAdmin"
        const email = loggedInUser.email
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    console.log(isAdmin);
    return (
        <div className="col-2" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    !isAdmin && <div>
                        <Link to="/bookingList"><li>Booking List</li></Link>
                        <Link to="/order"><li>Order</li></Link>
                        <Link to="/review"><li>Review</li></Link>
                    </div>
                }
                {
                    isAdmin && <div>
                        <Link to="/allOrderList"><li>Order List</li></Link>
                        <Link to="/addService"><li>Add Service</li></Link>
                        <Link to="/makeAdmin"><li>Make Admin</li></Link>
                        <Link to="/manageServices"><li>Manage Services</li></Link>
                    </div>
                }
            </ul>
        </div>
    );
};

export default SideBar;