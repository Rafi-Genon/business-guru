import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar'
import { useForm } from "react-hook-form";

const AddService = () => {
    const [imageURL, setImageURL] = useState()
    const [imageUpload, setImageUpload] = useState()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newServiceData = { ...data }
        newServiceData.imageURL = imageURL
        console.log(newServiceData)

        const url = "http://localhost:5050/addService"
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newServiceData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    // console.log(watch("example")); // watch input value by passing the name of it


    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', '9a1324da5eb95401b8d1fc7c0671eea1')
        imageData.append('image', event.target.files[0])

        const axios = require('axios');
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                setImageUpload(true)
            })
    }
    // console.log(imageURL);
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-10 background-color">
                <h3 style={{ fontWeight: '700' }} className="text-center pt-4 pb-3">Add Service</h3>

                <form style={{backgroundColor:'#dbf7e2'}} className="mt-3 p-5 rounded  shadow" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="serviceTitle">Title</label><br />
                            <input style={{width:'60%'}} name="serviceTitle" {...register("serviceName")} required />
                            <br />
                            <label htmlFor="serviceDescription">Description</label><br />
                            <input style={{width:'60%'}} name="serviceDescription" {...register("serviceDescription")} required />
                            <br />
                        </div>
                        <div className="col-6">
                            <label htmlFor="servicePrice">Price</label><br />
                            <input style={{width:'60%'}} name="servicePrice" {...register("servicePrice")} required />
                            <br />
                            <label htmlFor="serviceImage">Image</label><br />
                            <input style={{width:'60%'}} onChange={handleImageUpload} type="file" name="serviceImage" id="" required />
                            <br />
                        </div>
                    </div>
                    <input type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddService;