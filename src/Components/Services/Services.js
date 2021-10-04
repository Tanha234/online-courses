import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import '../Services/Services.css'

const Services = (props) => {
    const{title,courseImg,duration,cost}=props.services;
    return (
        <div>
            
            {
                <Col>
                <Card className="card-img">
                  <Card.Img  className="home-img" variant="top"  src={courseImg} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                     {duration}     ${cost} 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            }
           
        </div>
    );
};

export default Services;