import React from 'react';

const BookingCard = ({ booking }) => {
    const { imageURL, serviceDescription, serviceName } = booking.order
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{serviceDescription}</p>
                    {
                        booking.status === "Pending" && <p className="btn btn-danger">{booking.status}</p>
                    }
                    {
                        booking.status === "On going" && <p className="btn btn-primary">{booking.status}</p>
                    }
                    {
                        booking.status === "Done" && <p className="btn btn-success btn-disable">{booking.status}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingCard;