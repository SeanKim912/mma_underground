import React from "react";
import './MainPage.css';
import MainGallery from "../MainGallery";

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="main-left">
                <h1 className="main-text">MMA UNDERGROUND</h1>
                <h3>835 Virginia Rd, Unit C</h3>
                <h3>Crystal Lake, Illinois 60014</h3>
                <h3>(847) 219-5920</h3>
                <ul>
                    <li>
                        <button>CONTACT US</button>
                    </li>
                    <li>
                        <button>CLASS SCHEDULE</button>
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
