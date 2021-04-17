import React, { useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ProcessPayment from './ProcessPayment/ProcessPayment';
import { userContext } from '../../../App'
import { useForm } from "react-hook-form";

const Order = () => {
    const [userOrder, setUserOrder] = useContext(userContext)
    // console.log(userOrder);
    const [orderDetails, setOrderDetails] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setOrderDetails(data);
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div style={{backgroundColor: "#f6f9fc"}} className="col-lg-10">
                <div className="row">
                    <div style={{ display: orderDetails ? 'none' : 'block' }} className="col-6">
                        <div style={{ borderRadius: '2em' }} className="bg-light p-5 m-2 shadow">
                            <p>You are ordering for:</p>
                            <h5>{userOrder.order.serviceName}</h5>
                            <h6 className="text-success">${userOrder.order.servicePrice}</h6>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="payment-lable my-3" style={{ width: '60%' }}>
                                Your Company name
                                <input name="" {...register("name")} placeholder="" required />
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
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;