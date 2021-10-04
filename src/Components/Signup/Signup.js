import Button from '@restart/ui/esm/Button';
import React from 'react';
import signin from '../../signin.png'
import Footer from '../Footer/Footer';

import '../Signup/signup.css'

const Signup = () => {
    return (
        <div className="body-info">
           
        <div className="d-flex container ">
        <div className="col-md-6 ms-5">
            <img src={signin} alt=""/>

            
        </div>
        
        <div className="col-md-6 me-5 mt-5 signin pb-5">
        <h1 className="mb-2">Create a new Account</h1>
            <input className="w-75 px-3 my-2 py-2" placeholder="Enter your name" type="text"/>
            <br/>
            <input className="w-75 px-3 my-2 py-2" placeholder="Enter your email" type="email"/>
            <br/>
            <input className="w-75 px-3 my-2 py-2" placeholder="Set your username" type="text"/>
            <br/>
            <input className="w-75 px-3 my-2 py-2" placeholder="Set your password" type="password"/>
            <br/>
            <input className="mt-2" type="checkbox"/>
     
      <label for="subscribeNews">I agree to the Terms of Service, General Terms and Conditions and Privacy Policy.</label>
      <br/>
            <input className="mt-2 mb-3" type="checkbox"/>
     
      <label for="subscribeNews"> Notify me about new features and special offers..</label>
     <br/>
                <Button className="btn-regular">Sign up</Button>
                <br/>
                <small className="mt-3 pb-3">This form is protected by hCaptcha and its Privacy Policy and Terms of Service apply.</small>
                
            
        </div>
        
        </div>
        <Footer></Footer>
        
        </div>
    );
};

export default Signup;