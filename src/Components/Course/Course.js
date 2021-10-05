import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../Course/Course.css'



const Course = (props) => {
  let history = useHistory();
    const{courseImg,title,cost,star,learners,duration}=props.course;
    function handleClick() {
      history.push("/review");
    }
    function handle() {
      history.push("/confirm");
    }
  
    return (
        <div>
             <Col>
                <Card className="offer">
                  <Card.Img className="w-100 h-50" variant="top"  src={courseImg} />
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
                    <button className="ms-3 px-3" onClick={handleClick}>Details</button>
                    <button className="ms-3 px-3" onClick={handle}>Confirm</button>
                  </Card.Body>
                 
                </Card>
              </Col>
              
              
        </div>
    );
};

export default Course;