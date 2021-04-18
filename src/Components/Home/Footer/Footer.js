import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook, faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="footer-section row">
            <div className="col-lg-7 col-md-6 col-sm-12">
                <iframe className="p-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9850949244014!2d89.39362671437112!3d24.864358651226222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc555b9489a85d%3A0x453942617929c05a!2zTm92ZWx0eSBCRCDgpqjgp4vgpq3gp4fgprLgpp_gpr8g4Kas4Ka_4Kah4Ka_!5e0!3m2!1sen!2sbd!4v1618752171935!5m2!1sen!2sbd"
                    width="90%" height="500px" c style={{ border: 0, borderRadius: '3em' }}
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="row mt-5 p-4">
                    <div className="col-6">
                        <h6>Community</h6>
                        <div className="mt-5">
                            <p>Events</p>
                            <p>Blog</p>
                            <p>Forum</p>
                            <p>Community Standards</p>
                            <p>Podcast</p>
                            <p>Affiliates</p>
                            <div className="text-primary d-flex justify-content-around mt-5">
                                <FontAwesomeIcon style={{ fontSize: '40px' }} icon={faFacebook} />
                                <FontAwesomeIcon style={{ fontSize: '40px', color:'red' }} icon={faYoutube} />
                                <FontAwesomeIcon style={{ fontSize: '40px' }} icon={faTwitter} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6>More From Business Guru</h6>
                        <div className="mt-5">
                            <p>Business Guru Guides</p>
                            <p>Business Guru Pro</p>
                            <p>Business Guru Studios</p>
                            <p>Business Guru Logo Maker</p>
                            <p>Learn</p>
                            <p>Online Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;