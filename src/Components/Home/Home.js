import React from 'react';
import './Home.css';
import cover from '../../img/cover.jpg'
import logo from '../../img/logo.png'
const Home = () => {
    return (
        <div>
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Home;