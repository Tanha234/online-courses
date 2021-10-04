import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';



const Courses = () => {
    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('/services.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));

    },[])
  
    return (
        <div>
            <div>
            <h1 className="mb-3 mt-3">Our top-rated Courses </h1>
            <input className="w-50 mt-3" placeholder="Find your course" type="text"></input>
            <Row xs={1} md={3} className="g-20 cards">
          {
              courses.map(course=><Course 
                key={course.key}
                course={course}></Course>)
          }
          </Row>
          </div>
          
         
        </div>
        
    );
};

export default Courses;