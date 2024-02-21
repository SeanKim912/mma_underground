import React from 'react';
import { useState } from 'react';
import './MainGallery.css';

import img1 from '../../images/mma_underground_banner.webp';
import img2 from '../../images/northwest_herald.webp';
import img3 from '../../images/gym_front.jpg';

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

    const goToImage = (imageIndex) => {
        setCurrentIndex(imageIndex);
    }

    return (
        <>
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
            <div className='dots-container'>
                {images.map((image, imageIndex) => (
                    <div className='dot' key={imageIndex} onClick={() => goToImage(imageIndex)}>
                        .
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainGallery;
