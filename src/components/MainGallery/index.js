import React from 'react';
import './MainGallery.css';
import { Slide } from "react-slideshow-image";
import img1 from './mma_underground_banner.webp';
import img2 from './mma_underground_banner.webp';

const MainGallery = () => {
    const images = [
        img1,
        img2
    ]

    return (
        <>
            <Slide>
                <div className='slide-effect'>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className='slide-effect'>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
            </Slide>
        </>
    )
}

export default MainGallery;
