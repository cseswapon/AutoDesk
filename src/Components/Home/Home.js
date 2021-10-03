import React from 'react';
import './Home.css';
import cover from '../../img/cover.jpg'
const Home = () => {
    return (
        <div className="add-img">
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
        </div>
    );
};

export default Home;