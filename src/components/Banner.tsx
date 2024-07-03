import DynamicSlider from "./DynamicSlider";

function Banner() {

    return (
        <section className="relative h-dvh max-w-screen bg-no-repeat bg-cover bg-center md:bg-[url('./assets/japan.jpg')] bg-[url('./assets/japan-mobile.png')]">
            <div className="relative h-dvh max-w-screen bg-no-repeat bg-cover bg-center md:bg-[url('./assets/japan-mask.png')] bg-[url('./assets/japan-mask-mobile.png')] z-10">
            </div>


            <div className="absolute gap-10 md:top-[20%] top-[18%] md:left-[18%] left-[5%] animate-slideFromBottomToMiddle ">
                <h1 className="md:text-[14rem] text-[6.5rem] font-semibold text-[#FFF5F5] z-20">JAPAN</h1>
            </div>
            <div className="absolute bottom-5 md:right-10 left-1 md:left-auto z-50">
                <DynamicSlider />
            </div>

        </section >
    )
}

export default Banner
