import React from "react";
import './MainPage.css';
import MainGallery from "../MainGallery";
import { NavLink } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="main-left">
                <div className="text-effect-wrapper">
                    <h1 className="main-text">MMA UNDERGROUND</h1>
                </div>
                <h3>835 Virginia Rd, Unit C</h3>
                <h3>Crystal Lake, Illinois 60014</h3>
                <h3>(847) 219-5920</h3>
                <ul className="button-list">
                    <li>
                        <NavLink exact to ="/contact">
                            <button className="main-button">CONTACT US</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/schedule">
                            <button className="main-button">CLASS SCHEDULE</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="main-right">
                <MainGallery />
            </div>
        </div>
    )
}

export default MainPage;
