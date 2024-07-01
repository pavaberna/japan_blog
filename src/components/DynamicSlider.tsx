import { useState, useEffect, useRef } from 'react';

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
            if (currentIndex === images.length - 4) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${currentIndex * 14.5}rem)`;
        }
    }, [currentIndex]);

    const nextSlide = () => {
        if (currentIndex < images.length - 4) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
            setCurrentIndex(images.length - 4);
        }
    };

    return (
        <div className='flex justify-center items-center z-20'>
            <button
                onClick={prevSlide}
                className={`left-0 z-10 p-2 bg-gray-200 hover:bg-gray-400 h-12 rounded-full ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                aria-label="Previous slide">
                &#8592;
            </button>
            <div className="flex justify-center items-center w-[70%] md:w-[700px] pl-[5%] md:pl-[230px] overflow-hidden">
                <a href={`#${images[currentIndex].src}`}>
                    <div ref={sliderRef} className="relative flex justify-center items-center gap-8 md:w-[87rem]">
                        {images.map((image, index) => (
                            <div key={index} className='relative flex-[0 0 33.33%]'>
                                <img
                                    src={image.src}
                                    alt={image.text}
                                    className="w-full md:h-[20rem] object-cover rounded-xl"
                                />
                                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-xl text-center">
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
