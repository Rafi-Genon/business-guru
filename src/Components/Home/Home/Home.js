import React from 'react';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <div>
            <h1>hey home</h1>
            <Service></Service>
            <Reviews></Reviews>
            <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Home;