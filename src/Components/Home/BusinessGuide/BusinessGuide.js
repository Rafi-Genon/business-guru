import React from 'react';
import onlineBusiness from '../../../Images/online-business.PNG'
import doMarketin from '../../../Images/digital-marketing-made-easy.PNG'
import createLogo from '../../../Images/create-logo.PNG'
import './BusinessGuide.css'
const BusinessGuide = () => {
    return (
        <div className="business-guide-section">
            <h2 className="pt-5 pl-5">Business Guide</h2>
            <div className="row px-5 pb-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={onlineBusiness} alt="" />
                    <h5>Start an online business and work from home</h5>
                    <p>A complete guide to starting a small business online</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={doMarketin} alt="" />
                    <h5>Digital Marketing made Easy</h5>
                    <p>A practical guide to understand what is digital marketing</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={createLogo} alt="" />
                    <h5>Create a logo for your business</h5>
                    <p>A step-by-step guide to create a memorable business logoSee More Guides</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessGuide;