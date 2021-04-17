import React from 'react';

const ReviewsCard = ({ reviews }) => {
    const { name, designation, description, profileImage } = reviews
    return (
        <div className="col-lg-3">
            <div className="card text-center" style={{ width: "18rem" }}>
                <div className="d-flex my-3 justify-content-center"><img style={{ height: '50%', width: '25%', borderRadius: '50%' }} src={profileImage} alt="..." /></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">{designation}</h6>
                    <p className="card-text my-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;