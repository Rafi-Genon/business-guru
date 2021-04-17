import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className="row p-5">
            {
                services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
    );
};

export default Service;