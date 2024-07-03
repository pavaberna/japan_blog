import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import tokyo from "../assets/tokyo.jpg"
import hakone from "../assets/hakone.jpg"
import kyoto from "../assets/kyoto.jpg"
import nara from "../assets/nara.jpg"
import osaka from "../assets/osaka.jpg"

const images = [
    { src: tokyo, text: "TOKYO" },
    { src: hakone, text: "HAKONE" },
    { src: kyoto, text: "KYOTO" },
    { src: nara, text: "NARA" },
    { src: osaka, text: "OSAKA" }
];

function DynamicSlider() {
    const [active, setActive] = useState<null | number>(null)

    return (
        <div className="text-white flex items-center justify-center z-20">
            <div className="max-w-4xl max-w-xs md:block hidden">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={(cur) => setActive(cur.realIndex)}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Autoplay]}
                >

                    <div className="flex justify-center items-center overflow-hidden">
                        {images.map((city, index) => (
                            <SwiperSlide key={index}>
                                <div className='h-96 flex'>
                                    <div className={`card dynamic-bg bg-[url("${city.src}")] ${active === index && "card-active"}`}
                                        style={{ backgroundImage: `url(${city.src})` }}
                                    >
                                        <h2 className='text-3xl pt-8 font-semibold'>{city.text}</h2>

                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </div>
                </Swiper>
            </div>
            <div className="max-w-sm block md:hidden">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    onSlideChange={(cur) => setActive(cur.realIndex)}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 3000
                    }}
                    modules={[Autoplay]}
                >

                    <div className="flex justify-center items-center overflow-hidden">
                        {images.map((city, index) => (
                            <SwiperSlide key={index}>
                                <div className='h-96 flex'>
                                    <div className={`card dynamic-bg bg-[url("${city.src}")] ${active === index && "card-active"}`}
                                        style={{ backgroundImage: `url(${city.src})` }}
                                    >
                                        <h2 className='text-xl font-semibold'>{city.text}</h2>

                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default DynamicSlider;
