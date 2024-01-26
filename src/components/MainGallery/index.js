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

    return (
        <div className='slide-container'>
            <div className='slide' style={{backgroundImage: `url(${images[currentIndex]})`}}>

            </div>
        </div>
    )
}

export default MainGallery;
