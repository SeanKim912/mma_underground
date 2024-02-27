import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './MainGallery.css';

import img1 from '../../images/mma_underground_banner.webp';
import img2 from '../../images/northwest_herald.webp';
import img3 from '../../images/gym_front.jpg';

const MainGallery = () => {
    const [ index, setIndex ] = useState(0);
    const timeoutRef = useRef(null);

    const images = [
        img1,
        img2,
        img3
    ];

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ), 2500
        );

        return () => {
            resetTimeout();
        };
    }, [index, images.length]);

    return (
        <>
            <div className='slideshow'>
                <div
                    className='slideshowSlider'
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image, index) => (
                        <img
                            className='slide'
                            key={index}
                            src={image}
                        />
                    ))}
                </div>
            </div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default MainGallery;
