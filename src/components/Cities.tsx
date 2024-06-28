import tokyo from "../assets/tokyo.jpg"
import hakone from "../assets/hakone.jpg"
import kyoto from "../assets/kyoto.jpg"
import nara from "../assets/nara.jpg"
import osaka from "../assets/osaka.jpg"
import { useState } from "react"

function Cities() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevButtonIsDisabled, setPrevButtonIsDisabled] = useState(false)
    const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState(false)

    const cards = [
        { src: tokyo, text: "TOKYO" },
        { src: hakone, text: "HAKONE" },
        { src: kyoto, text: "KYOTO" },
        { src: nara, text: "NARA" },
        { src: osaka, text: "OSAKA" }
    ];
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    if (currentIndex > cards.length - 3) {
        setNextButtonIsDisabled(true)
        setPrevButtonIsDisabled(false)
    } else if (currentIndex === 3) {
        setPrevButtonIsDisabled(true)
        setNextButtonIsDisabled(false)
    }

    return (
        <section className="flex justify-center items-center gap-10">

            <button className={currentIndex > 0 ? "w-6 h-6 rounded-full bg-gray-300 relative" : "w-6 h-6 rounded-full color-white bg-gray-700 relative cursor-not-allowed"} disabled={prevButtonIsDisabled} onClick={handlePrev}>&lt;</button>



            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                <div key={index} className="relative text-3xl hover:text-5xl hover:transform hover:scale-110 hover:cursor-pointer hover:duration-700 z-0 hover:z-10">
                    <img src={card.src} alt={card.text.toLocaleLowerCase()} className="h-[400px] object-cover hover:duration-1000 blur-[2px] hover:blur-0 rounded-xl" />
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-szoveg pointer-events-none">{card.text}</div>
                </div>

            ))}

            <button className={(currentIndex < cards.length - 3) ? "w-6 h-6 rounded-full bg-gray-300 relative" : "w-6 h-6 rounded-full color-white bg-gray-700 relative cursor-not-allowed"} disabled={nextButtonIsDisabled} onClick={handleNext}>&gt;</button>


        </section>
    )
}

export default Cities