import React from 'react';
import SideBar from '../SideBar/SideBar'
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = email => {
        console.log(email);
        const url = "https://hidden-hollows-18643.herokuapp.com/addAdmin"
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-lg-10 background-color">
                <h3 style={{fontWeight:'700'}} className="text-center pt-4">Make Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">
                        Email
                    <input name="" {...register("email")} placeholder="xyz@gmail.com" required />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;