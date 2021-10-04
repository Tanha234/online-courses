import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../../src/logo1.png'
import './Header.css'

const Header = () => {
    const  activeStyle={
        fontWeight: "bold",
        color: "grey"
      }

    return (
        <div className="d-flex header">
            <img className="logo-img" src={logo1} alt=""/>
            <nav className="nav-icon">
            <NavLink to="/home"  activeStyle={activeStyle} className="Nav-item" >Home</NavLink>
            <NavLink to="/about"  activeStyle={activeStyle} className="Nav-item">About</NavLink>
            <NavLink to="/courses"  activeStyle={activeStyle} className="Nav-item">Courses</NavLink>
            <NavLink to="/contact"  activeStyle={activeStyle} className="Nav-item">Contact</NavLink>
            <NavLink to="/singup"  activeStyle={activeStyle} className="Nav-item">Sign In</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;