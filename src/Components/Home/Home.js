import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

import Service from '../Service/Service';
import Teacher from '../Teacher/Teacher';
import '../Home/Home.css'
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className="home">
           
            <Banner></Banner>
             
            <Service></Service>
        
            
        
        
       <Categories></Categories>
       <Teacher></Teacher>
       <Footer></Footer>
      
        
        
        </div>
       
            
        
    );
};

export default Home;