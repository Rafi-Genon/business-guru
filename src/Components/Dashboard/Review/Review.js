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
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-lg-10">
                <p>it is review</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="" {...register("name")} placeholder="Your name" required />
                    <br />
                    <input name="" {...register("designation")} placeholder="Company's name, Designation" required />
                    <br />
                    <input name="" {...register("description")} placeholder="Description" required />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;