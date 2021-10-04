import Button from '@restart/ui/esm/Button';
import React from 'react';
import Footer from '../Footer/Footer';

import './Conatct.css'

const Contact = () => {
    return (
        <div>
            <div className="container-class ">
                <h1 className="pt-5">Contact Us</h1>
                <p>We are always here to help you.When you feel need to query any type of question.Feel try to knock us.Our servies are available for 24/7.We will happy to give you guide for your bright future .</p>
                </div>
                <div className="form">
                <div className="container form">
                    <h2 className="conatct-text">Contact Form </h2>
                    
                    <input className="w-50 mt-3 p-2" placeholder="Enter your full name" type="text"/>
                    <br/>
                    <input className="w-50 mt-3 p-2" placeholder="Enter your email" type="email"/>
                    <br/>
                    <input className="w-50 mt-3 p-2" placeholder="Subject" type="text"/>
                    <br/>
                    <h6 className="message-text">Message:</h6>
                    <textarea className="text-area"name="comment" form="usrform"></textarea>
                    <br/>
                    <Button className="button-contact">Submit</Button>
                </div>
                
                 </div> 
                <Footer></Footer>
        </div>
    );
};

export default Contact;