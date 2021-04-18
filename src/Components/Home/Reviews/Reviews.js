import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard/ReviewsCard';
import { Spinner } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://hidden-hollows-18643.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <section>
            <h1 className="text-center pt-3">Testimonials</h1>
            <div className="row p-5">
                {
                    reviews.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                        : reviews.map(review => <ReviewsCard reviews={review} key={review._id}></ReviewsCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;