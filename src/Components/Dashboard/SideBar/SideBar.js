import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../../App';
import "./SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDatabase, faList, faPlus, faShoppingCart, faTrashAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';

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
        <div className="col-lg-2 col-md-3 col-sm-12" style={{ height: "100vh" }}>
            <ul className="list-unstyled pl-3 pt-3 sidebar-item">
                {
                    !isAdmin && <div>
                        <Link to="/bookingList"><li><FontAwesomeIcon icon={faList} /> Booking List</li></Link>
                        <Link to="/order"><li><FontAwesomeIcon icon={faShoppingCart} />Place Order</li></Link>
                        <Link to="/review"><li><FontAwesomeIcon icon={faComment} /> Review</li></Link>
                    </div>
                }
                {
                    isAdmin && <div>
                        <Link to="/allOrderList"><li><FontAwesomeIcon icon={faList} /> Order List</li></Link>
                        <Link to="/addService"><li><FontAwesomeIcon icon={faPlus} /> Add Service</li></Link>
                        <Link to="/makeAdmin"><li><FontAwesomeIcon icon={faUserShield} /> Make Admin</li></Link>
                        <Link to="/manageServices"><li><FontAwesomeIcon icon={faDatabase} /> Manage Services</li></Link>
                    </div>
                }
            </ul>
        </div>
    );
};

export default SideBar;