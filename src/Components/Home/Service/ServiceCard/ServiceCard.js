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

    // hover animation
    const [isBooped, setIsBooped] = React.useState(false);
    const style = {
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
            ? `rotate(${10}deg)`
            : `rotate(0deg)`,
        transition: `transform ${100}ms`,
    };
    React.useEffect(() => {
        if (!isBooped) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, 150);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped, 150]);
    const trigger = () => {
        setIsBooped(true);
    };

    return (
        <div className="col-lg-3">
            <div className="card shadow" style={{ width: "18rem" }}>
                <img onMouseEnter={trigger} style={style} src={imageURL} className="card-img-top" alt="..." />
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