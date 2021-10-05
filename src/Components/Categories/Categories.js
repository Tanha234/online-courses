import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';


const Categories = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('/icon.JSON')
        .then(res=>res.json())
        .then(data=>setCategories(data))

    },[])
    return (
        <div>
            
            <h1 className="course-text my-5">Top Category</h1>
            <Row xs={1} md={4} className=" cards mx-auto">
            {
                categories.map(category=><Category 
                    key={category.id}
                    category={category}></Category>)
                
            }
            </Row>
        </div>
    );
};

export default Categories;