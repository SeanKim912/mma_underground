import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav-container">
            <li>
                <img className="logo" src={require('./mma_underground_icon.png')} />
            </li>
            <li>
                <ul className="menu-tabs">
                    <li className="tab">HOME</li>
                    <li className="tab">CLASSES</li>
                    <li className="tab">KIDS</li>
                    <li className="tab">COACHES</li>
                    <li className="tab">TESTIMONIALS</li>
                    <li className="tab">ABOUT US</li>
                    <li className="tab">CONTACT US</li>
                </ul>
            </li>
        </ul>
    )
}

export default Navigation;
