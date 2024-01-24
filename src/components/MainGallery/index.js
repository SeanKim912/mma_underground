import React from 'react';
import './MainGallery.css';
import { Slide } from "react-slideshow-image";

const MainGallery = () => {
    const images = [
        './mma_underground_banner.webp',
        './northwest_herald.webp'
    ]

    return (
        <>
            <Slide>
                <div className='slide-effect'>
                    <img src={require(images[0])} />
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
