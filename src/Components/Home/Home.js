import React from 'react';
import './Home.css';
import cover from '../../img/cover.jpg';
import logo from '../../img/logo.png';
import Cards from '../Cards/Cards';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/details.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const services = service.slice(0, 4);
    return (
        <div>
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
            <div className="our-service">
                <h1>Our Services</h1>
            </div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(serv => <Cards services={serv} key={serv.key}></Cards>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;