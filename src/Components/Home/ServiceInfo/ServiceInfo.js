import React from 'react';
import './ServiceInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ServiceInfo = () => {
    return (
        <div className="row service-info-section">
            <div className="col-lg-6 col-md-6 col-sm-12 px-5 py-5">
                <h2 className="py-5">A whole world of freelance talent at your fingertips</h2>

                <div className="py-2">
                    <h4><FontAwesomeIcon style={{ opacity: '0.6' }} icon={faCheckCircle} /> The best for every budget</h4>
                    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing</p>
                </div>

                <div className="py-2">
                    <h4><FontAwesomeIcon style={{ opacity: '0.6' }} icon={faCheckCircle} /> Quality work done quickly</h4>
                    <p>Find the right freelancer to begin working on your project within minutes.</p>
                </div>

                <div className="py-2">
                    <h4><FontAwesomeIcon style={{ opacity: '0.6' }} icon={faCheckCircle} /> Protected payments, every time</h4>
                    <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                </div>

                <div className="py-2">
                    <h4><FontAwesomeIcon style={{ opacity: '0.6' }} icon={faCheckCircle} /> 24/7 support</h4>
                    <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                </div>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/WZ5WSUNrZt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <iframe width="90%" height="70%" src="https://www.youtube.com/embed/WZ5WSUNrZt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ServiceInfo;