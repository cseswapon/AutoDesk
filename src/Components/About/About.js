import React from 'react';
import cover from '../../img/cover.jpg';
import logo from '../../img/logo.png';
const About = () => {
    return (
        <div>
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
            <div className="our-service">
                <h1>About Us</h1>
            </div>
        </div>
    );
};

export default About;