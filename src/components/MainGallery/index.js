import React from 'react';
import './MainGallery.css';
import { Slide } from "react-slideshow-image";

import img1 from './mma_underground_banner.webp';
import img2 from './northwest_herald.webp';
import img3 from './gym_front.jpg';

const MainGallery = () => {
    const images = [
        img1,
        img2,
        img3
    ]

    return (
        <div className='slide-container'>
            <Slide>
                <div className='slide-effect' slidesToScroll={1} slidesToShow={1}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className='slide-effect' slidesToScroll={1} slidesToShow={1}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className='slide-effect' slidesToScroll={1} slidesToShow={1}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default MainGallery;
