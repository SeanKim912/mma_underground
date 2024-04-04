import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav-container">
            <li>
                <NavLink exact to="/">
                    <img className="logo" src={require('../../images/mma_underground_icon.png')} />
                </NavLink>
            </li>
            <li>
                <ul className="menu-tabs">
                    <li className="tab">
                        <NavLink className="tabLink" exact to="/">HOME</NavLink>
                    </li>
                    <li className="tab">
                        <NavLink className="tabLink" exact to="/about">ABOUT US</NavLink>
                    </li>
                    <li className="tab">CLASSES</li>
                    <li className="tab">KIDS</li>
                    <li className="tab">COACHES</li>
                    <li className="tab">TESTIMONIALS</li>
                    <li className="tab">CONTACT US</li>
                </ul>
            </li>
        </ul>
    )
}

export default Navigation;
