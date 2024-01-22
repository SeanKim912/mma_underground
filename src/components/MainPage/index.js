import React from "react";
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="main-left">
                <h1>MMA UNDERGROUND</h1>
                <h3>835 Virginia Rd, Unit C</h3>
                <h3>Crystal Lake, Illinois 60014</h3>
            </div>
            <div className="main-right">
                <img className="main-img" src={require('./mma_underground_banner.webp')} />
                <img className="main-img" src={require('./northwest_herald.webp')} />
            </div>
        </div>
    )
}

export default MainPage;
