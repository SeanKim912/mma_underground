import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav-container">
            <li>
                <img className="logo" src="https://lh3.googleusercontent.com/pw/ABLVV87_C5HNi3tViTLh00DNnEvoEiDgvz50C11-Hh-4irLkZHw6u42r4scYVk2t-zqT4ZyAK1D_lwpugwVke6yi-rqyMkOyTpX-2-j1SzH5aekwdDbgOR21kj-LVxPVYJyE1S3UC8jYjJcZ4ElVzRden0D4=w192-h189-s-no-gm?authuser=0" />
            </li>
            <li className="menu-tabs">
                <li className="tab">CLASSES</li>
                <li className="tab">KIDS</li>
                <li className="tab">COACHES</li>
                <li className="tab">TESTIMONIALS</li>
                <li className="tab">ABOUT US</li>
                <li className="tab">CONTACT US</li>
            </li>
        </ul>
    )
}

export default Navigation;
