import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="col-2" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <Link to="/clientServiceList"><li>Service List</li></Link>
                <Link to="/order"><li>Order</li></Link>
                <Link to="/review"><li>Review</li></Link>
                <Link to="/allServiceList"><li>Service List</li></Link>
                <Link to="/addService"><li>Add Service</li></Link>
                <Link to="/makeAdmin"><li>Make Admin</li></Link>
            </ul>
        </div>
    );
};

export default SideBar;