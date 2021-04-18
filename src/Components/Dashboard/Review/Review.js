import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';

const Review = () => {
    const [user, setUser] = useContext(userContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = { ...data }
        reviewData.profileImage = (user.image)
        reviewData.email = (user.email)
        console.log(reviewData);

        const url = "http://localhost:5050/addReview"
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-lg-10 background-color">
            <h3 style={{fontWeight:'700'}} className="text-center py-4">Submit your review</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width:"30%"}} name="" {...register("name")} placeholder="Your name" required />
                    <br />
                    <input style={{width:"30%"}} name="" {...register("designation")} placeholder="Company's name, Designation" required />
                    <br />
                    <input style={{width:"30%"}} name="" {...register("description")} placeholder="Description" required />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;