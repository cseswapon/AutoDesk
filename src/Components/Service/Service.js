import React from 'react';
import useService from '../Hooks/useService';
import cover from '../../img/cover.jpg';
import logo from '../../img/logo.png';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
const Service = () => {
    const [service] = useService();
    return (
        <div>
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
            <div className="our-service">
                <h1>Our Total Services</h1>
            </div>
            {
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {
                            service.map(serv => <Cards services={serv} key={serv.key}></Cards>)
                        }
                    </Row>
                </Container>
            }
        </div>
    );
};

export default Service;