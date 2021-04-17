import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { Spinner, Table } from 'react-bootstrap';

const OrderList = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    console.log(allOrders);

    const update = (id, status) => {
        console.log(id, status);
        const url = `http://localhost:5050/update/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div style={{ backgroundColor: "#f6f9fc" }} className="col-lg-10">
                <Table hover>
                    <thead>
                        <tr className="table-primary text-center">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(orders =>
                                < tr className="text-center">
                                    <td>{orders.userInfo.name}</td>
                                    <td>{orders.userInfo.email}</td>
                                    <td>{orders.userInfo.order.serviceName}</td>
                                    <td>{orders.type}</td>
                                    <td>
                                        <button onClick={() => update(orders._id, "Pending")} className="btn btn-danger">Pending</button>
                                        <button onClick={() => update(orders._id, "On going")} className="btn btn-primary mx-2">On going</button>
                                        <button onClick={() => update(orders._id, "Done")} className="btn btn-success">Done</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default OrderList;