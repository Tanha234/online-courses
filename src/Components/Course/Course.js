import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Course/Course.css'



const Course = (props) => {
    const{courseImg,title,cost,star,learners,duration}=props.course;
    return (
        <div>
             <Col>
                <Card className="offer">
                  <Card.Img  className="home-img" variant="top"  src={courseImg} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Cost:${cost}
                    </Card.Text>
                    <Card.Text>
                    Rating:{star}
                    </Card.Text>
                    <Card.Text>
                    Duration: {duration}
                    </Card.Text>
                    <Card.Text>
                    Learners:{learners}
                    </Card.Text>
                    <button className="ms-3 px-3" >Details</button>
                    <button className="ms-3 px-3">Confirm</button>
                  </Card.Body>
                 
                </Card>
              </Col>
              
              
        </div>
    );
};

export default Course;