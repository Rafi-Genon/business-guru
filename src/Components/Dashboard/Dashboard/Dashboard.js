import React from 'react';
import { Link } from "react-router-dom";
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <div className="row ">
            <SideBar></SideBar>
            <div className="col-10 background-color">
                <h3 style={{ fontWeight: '700' }} className="text-center pt-4 pb-3">Welcome to Dashboard </h3><h5 className="text-center pt-4 pb-3">choose option from sidebar</h5>
        </div>
        </div >
    );
};

export default Dashboard;