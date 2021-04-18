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
    const placeOrder = (paymentId, paymentType) => {
        const url = "http://localhost:5050/addOrder"
        const userOrderDetails = { ...userInfo, ...orderDetails, paymentId, paymentType, status: "Pending", date: new Date() }
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userOrderDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-lg-10 background-color">
            <h3 style={{fontWeight:'700'}} className="text-center py-4">Place Order Info</h3>
                <div className="row p-5">
                    {
                        userInfo.order ? <>
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
                        </>
                        :<>
                            <h1 className="text-danger">You didn't order anything back to home and order.</h1>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Order;