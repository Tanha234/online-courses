import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './../Category/Category.css'

const Category = (props) => {
    const{icon,item}=props.category;
    return (
        <div>
             <Col>
                <Card className="category">
                  <Card.Img variant="top" className="category-img" src={icon} />
                  <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>
            
        </div>
    );
};

export default Category;