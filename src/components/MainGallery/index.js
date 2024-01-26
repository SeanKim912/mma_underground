import React from 'react';
import { useState } from 'react';
import './MainGallery.css';

import img1 from './mma_underground_banner.webp';
import img2 from './northwest_herald.webp';
import img3 from './gym_front.jpg';

const MainGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        img1,
        img2,
        img3
    ];

    function leftButton() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    function rightButton() {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className='slide-container'>
            <div>
                <button className='arrows' onClick={leftButton}>«</button>
            </div>
                <div className='slide' style={{backgroundImage: `url(${images[currentIndex]})`}}>
            </div>
            <div>
                <button className='arrows' onClick={rightButton}>»</button>
            </div>
        </div>
    )
}

export default MainGallery;
