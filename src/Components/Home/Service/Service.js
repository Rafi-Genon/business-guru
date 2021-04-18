import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import { Spinner, Table } from 'react-bootstrap';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <section className="bg-light">
            <h1 className="text-center py-4 mt-5">Our Super Fast <span className="text-success">Services</span> </h1>
            <div className="row p-5 mt-5">
                {
                    services.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                        : services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Service;