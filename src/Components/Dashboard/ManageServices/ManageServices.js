import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { Spinner, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServices = () => {
    const [services, setServices] = useState([])
    const fetchServicesData = () => {
        fetch('http://localhost:5050/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }
    useEffect(() => {
        fetchServicesData()
    }, [])

    const removeFromServer = (id) => {
        fetch(`http://localhost:5050/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => fetchServicesData())

    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-lg-10 background-color">
                <h3 style={{fontWeight:'700'}} className="text-center pt-4">Manage Services</h3>
                {
                    services.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                        : <div className="shadow my-5 bg-light" style={{ padding: '2%', borderRadius: '1em' }}>
                            <Table hover>
                                <thead className="text-center">
                                    <tr className="table-primary">
                                        {/* <td style={{ width: '50px' }}>Serial</td> */}
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        services.map(service =>
                                            // <tr key={index}>
                                            <tr>
                                                {/* <td>{index + 1}</td> */}
                                                <td>{service.serviceName}</td>
                                                <td>$ {service.servicePrice}</td>
                                                <td><button className="btn btn-danger" onClick={() => removeFromServer(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                            </tr>)
                                    }
                                </tbody>
                            </Table></div>
                }
            </div>
        </div>
    );
};

export default ManageServices;