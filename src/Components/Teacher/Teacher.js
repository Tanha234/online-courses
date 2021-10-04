import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Teachers from '../Teachers/Teachers';

const Teacher = () => {
    const[teacher,setTeacher]=useState([]);
    useEffect(()=>{
        fetch('/home.JSON')
        .then(res=>res.json())
        .then(data=>setTeacher(data));

    },[])
    return (
        <div>
            <h1 className="course-text">Our top Teachers </h1>
            {
                <Row xs={1} md={4} className="g-20 cards">
                    {
                      teacher.map(teachers=><Teachers
                      key={teachers.id}
                         teachers={teachers}></Teachers>)
                    }
                </Row>
            }
        </div>
    );
};

export default Teacher;