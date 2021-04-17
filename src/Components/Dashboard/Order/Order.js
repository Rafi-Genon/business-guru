import React, { useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ProcessPayment from './ProcessPayment/ProcessPayment';
import { userContext } from '../../../App'
import { useForm } from "react-hook-form";

const Order = () => {
    const [userInfo, setUserInfo] = useContext(userContext)
    const [orderDetails, setOrderDetails] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setOrderDetails(data);
    }
    const placeOrder = (id, type) => {
        const url = "http://localhost:5050/addOrder"
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInfo, orderDetails, id, type, status: "Pending", date: new Date() })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div style={{ backgroundColor: "#f6f9fc" }} className="col-lg-10">
                <div className="row">
                    <div style={{ display: orderDetails ? 'none' : 'block' }} className="col-6">
                        <div style={{ borderRadius: '2em' }} className="bg-light p-5 m-2 shadow">
                            <p>You are ordering for:</p>
                            <h5>{userInfo.order.serviceName}</h5>
                            <h6 className="text-success">${userInfo.order.servicePrice}</h6>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="payment-lable my-3" style={{ width: '60%' }}>
                                Your Company name
                                <input name="" {...register("companyName")} placeholder="" required />
                            </label>
                            <br />
                            <label className="payment-lable my-3" style={{ width: '60%' }}>
                                Your Company Address
                                <input name="" {...register("address")} placeholder="" required />
                            </label>
                            <br /><label className="payment-lable my-3" style={{ width: '60%' }}>
                                Your Website
                                <input name="" {...register("website")} placeholder="" required />
                            </label>
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                    <div style={{ display: orderDetails ? 'block' : 'none' }} className="col-6">
                        <ProcessPayment placeOrder={placeOrder}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;