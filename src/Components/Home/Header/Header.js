import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import digitalMarketing from "../../../Images/digital-marketing.jpg";
import reactJs from "../../../Images/react-js.jpg"
import logoDesign from "../../../Images/logo-design.jpg"

const Header = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={1000}>
                    <img
                        height="450px"
                        className="d-block w-100"
                        src={digitalMarketing}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Digital Marketing</h3>
                        <p>We are ready to find your dream customer for your business</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        height="450px"
                        className="d-block w-100"
                        src={reactJs}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>React js Development</h3>
                        <p>We will build you any kind of website or mobile app for you company</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img height="450px"
                        className="d-block w-100"
                        src={logoDesign}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Profession Logo Design</h3>
                        <p>We design logo to attract your customer to your business</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;


// className="text-warning p-1 bg-danger rounded"