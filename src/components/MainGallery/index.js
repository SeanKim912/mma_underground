import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './MainGallery.css';

const MainGallery = () => {
    const [ index, setIndex ] = useState(0);
    const timeoutRef = useRef(null);

    const images = [
        "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/mma_underground_banner.webp",
        "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/northwest_herald.webp",
        "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/gym_front.jpg"
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
                    style={{ transform: `translate3d(0, ${-index * 45}vh, 0)` }}
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
