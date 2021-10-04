import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Cards.css';

const Cards = props => {
    const { img, name, institute, date, duration, schedule, fee, reating, Classes, features } = props.services;
    const technology = features[0];
    return (
        // Card Section start
        <Col>
            <Card className="div-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}> <h1>{name}</h1> </Card.Title><hr />
                    <Card.Text>
                        <p> <strong>Institue Name :</strong>  {institute}</p>
                        <p><small> <strong>Date :</strong>  {date}</small></p>
                        <div style={{ display: "flex" }}>
                            <div>
                                <p><small> <strong>Duration :</strong>  {duration}</small></p>
                                <p><small> <strong>Schedule :</strong>  {schedule}</small></p>
                                <p><small> <strong>Classes :</strong>  {Classes}</small></p>
                                <p><small> <strong>Fee :</strong>  $ {fee}</small></p>
                            </div>
                            <div style={{ marginLeft: "100px" }}>
                                <small className="small-rating">
                                    <Rating readonly
                                        initialRating={reating}
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                    />
                                </small><br /><br />
                                <strong>Features</strong>
                                <ul style={{ color: "gray" }}>
                                    <li>Technology : <strong>{technology?.technology}</strong> </li>
                                    <li>Job Hanting : <strong>{technology?.job}</strong> </li>
                                    <li>Extar Skill : <strong>{technology?.skill}</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;