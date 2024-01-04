import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav-container">
            <li>CLASSES</li>
            <li>KIDS</li>
            <li>COACHES</li>
            <li>TESTIMONIALS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
        </ul>
    )
}

export default Navigation;
