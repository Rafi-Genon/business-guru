import React, { useEffect, useState } from 'react';

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
                services.map(service =>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={service.imageURL} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.serviceName}</h5>
                                <p className="card-text">{service.serviceDescription}</p>
                                <p className="btn btn-primary">Go somewhere</p>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Service;