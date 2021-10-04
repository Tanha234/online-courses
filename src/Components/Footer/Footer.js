import React from 'react';
import '../Footer/Footer.css'
import Instragram from '../../Twitter.png'
import YouTube from '../../Youtube.png'
import Twitter from '../../Instagram.png'
import Facebook from '../../Dribbble.png'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h6 className="pt-2 pb-2">Contact us</h6>
            <img className="img ps-3"src={Instragram} alt=""/>
            <img className="img ps-3"src={YouTube} alt=""/>
            <img className="img ps-3"src={Facebook} alt=""/>
            
            <img className="img ps-3"src={Twitter} alt=""/>
            
            </div>
            <div>
                <input className="mt-5"placeholder="" type="text"/>
            <h6 className="mt-3">Suscribe</h6>
            </div>
            
            
            <small>Terms of uses Privacy Policy</small>
        </div>
    );
};

export default Footer;