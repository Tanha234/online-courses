import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Teachers/Teachers.css'

const Teachers = (props) => {
    const{instructorImg,istructorName,title}=props.teachers;
    return (
        <div>
             <Col>
                <Card className="card-img">
                  <Card.Img  className="home-img" variant="top"  src={instructorImg} />
                  <Card.Body>
                    <Card.Title>{istructorName}</Card.Title>
                    <Card.Text>{title}</Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
        </div>
    );
};

export default Teachers;