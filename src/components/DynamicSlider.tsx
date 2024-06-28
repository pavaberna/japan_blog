import React, { useState, useEffect, useRef } from 'react';

import tokyo from "../assets/tokyo.jpg"
import hakone from "../assets/hakone.jpg"
import kyoto from "../assets/kyoto.jpg"
import nara from "../assets/nara.jpg"
import osaka from "../assets/osaka.jpg"

const images = [
    { src: tokyo, text: "TOKYO" },
    { src: tokyo, text: "TOKYO" },
    { src: hakone, text: "HAKONE" },
    { src: kyoto, text: "KYOTO" },
    { src: nara, text: "NARA" },
    { src: osaka, text: "OSAKA" }
];

function DynamicSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === images.length - 3) {
                setCurrentIndex(0);
            }
            setCurrentIndex(currentIndex => (currentIndex + 1) % (images.length - 3));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${currentIndex * 225}px)`;
        }
    }, [currentIndex]);

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='flex justify-center items-center'>
            <button
                onClick={prevSlide}
                className={`left-0 z-10 p-2 bg-gray-200 hover:bg-gray-400 h-12 rounded-full ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                aria-label="Previous slide">
                &#8592;
            </button>
            <div className="flex justify-center items-center w-[700px] pl-[230px] overflow-hidden">
                <a href={`#${images[currentIndex].src}`}>
                    <div ref={sliderRef} className="flex justify-center items-center gap-8">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.src}
                                    alt={image.text}
                                    className="h-[300px] w-[200px] object-cover rounded-xl"
                                />
                                <div className="w-[200px] bg-black bg-opacity-50 text-white p-2 text-center">
                                    {image.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </a>
            </div>
            <button
                onClick={nextSlide}
                className={`right-0 z-10 p-2 bg-gray-200 hover:bg-gray-400 h-12 rounded-full ${currentIndex === images.length - 4 ? 'opacity-0 pointer-events-none' : ''}`}
                aria-label="Next slide">
                &#8594;
            </button>
        </div >
    );
}

export default DynamicSlider;
