import React from 'react';
import BusinessGuide from '../BusinessGuide/BusinessGuide';
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
            <BusinessGuide></BusinessGuide>
            <Footer></Footer>
        </div>
    );
};

export default Home;