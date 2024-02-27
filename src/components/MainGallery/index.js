import React from 'react';
import './MainGallery.css';

import img1 from '../../images/mma_underground_banner.webp';
import img2 from '../../images/northwest_herald.webp';
import img3 from '../../images/gym_front.jpg';

const MainGallery = () => {
    const images = [
        img1,
        img2,
        img3
    ];

    return (
        <>
            <div className='slideshow'>
                <div className='slideshowSlider'>
                    {images.map((image, index) => (
                        <div className='slide' key={index} style={{ backgroundImage: `url(${image})`}} />
                    ))}
                </div>
            </div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div key={idx} className="slideshowDot"></div>
                ))}
            </div>
        </>
    )
}

export default MainGallery;
