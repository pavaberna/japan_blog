//import Cities from "./Cities";
import DynamicSlider from "./DynamicSlider";

function Banner() {


    return (
        <section className="relative h-screen max-w-screen bg-no-repeat bg-cover bg-[url('./assets/japan.jpg')]">
            <div className="relative h-screen max-w-screen bg-no-repeat bg-cover bg-[url('./assets/japan-mask.png')] z-10">
            </div>


            <div className="flex items-center gap-10 absolute top-[20%] left-[18%] animate-slideFromBottomToMiddle">
                <h1 className="text-[230px] font-semibold text-[#FFF5F5] ">JAPAN</h1>
            </div>
            <div className="absolute bottom-5 right-10 z-50">
                <DynamicSlider />
            </div>

        </section >
    )
}

export default Banner
