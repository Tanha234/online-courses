import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

import Service from '../Service/Service';
import Teacher from '../Teacher/Teacher';
import '../Home/Home.css'



const Home = () => {
    return (
        <div className="home">
            <h2>hello</h2>
           
            <Banner></Banner>
             
            <Service></Service>
        
            
        
        
       <Categories></Categories>
       <Teacher></Teacher>
       
      
        
        
        </div>
       
            
        
    );
};

export default Home;