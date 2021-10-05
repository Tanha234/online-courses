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
                <Card className=" h-100">
                  <Card.Img  variant="top" className="img-fluid" src={courseImg} />
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