import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../../../App'
const ServiceCard = ({ service }) => {
    const [userOrder, setUserOrder] = useContext(userContext)
    const { imageURL, serviceName, serviceDescription, servicePrice } = service

    const handleOrder = (service) => {
        const newUserInfo = { ...userOrder }
        newUserInfo.order = service
        setUserOrder(newUserInfo)
    }
    return (
        <div className="col-lg-3">
            <div className="card shadow" style={{ width: "18rem" }}>
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{serviceDescription}</p>
                    <h5 className="card-title text-danger">${servicePrice}</h5>
                    <Link to="/order"><p onClick={() => handleOrder(service)} className="btn btn-primary">Order Now</p></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;