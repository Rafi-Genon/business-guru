import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <ServiceInfo></ServiceInfo>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;