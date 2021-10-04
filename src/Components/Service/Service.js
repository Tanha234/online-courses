import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Service/Service.css'

const Service = () => {
    const[service,setService]=useState([]);
    useEffect(()=>{
        fetch('./home.JSON')
        .then(res=>res.json())
        .then(data=>setService(data));

    },[])
    
    
    return (
        <div>
            <h1 className="course-text">Popular Courses </h1>
            

    <Row xs={1} md={4} className="g-20 cards">
     {
        service.map(services=><Services
        key={services.id}
             services={services}></Services>)
         }
</Row>
            
        </div>
    );
};

export default Service;