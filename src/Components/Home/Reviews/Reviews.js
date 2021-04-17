import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard/ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="row p-5">
            {
                reviews.map(review => <ReviewsCard reviews={review} key={review._id}></ReviewsCard>)
            }
        </div>
    );
};

export default Reviews;