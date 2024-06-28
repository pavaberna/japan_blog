import { useState, useEffect } from "react";

function NavBar() {
    const [navColor, setnavColor] = useState("transparent");
    const [navSize, setnavSize] = useState("10rem");
    const [topPadding, setTopPadding] = useState("3rem");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#FFF5F5") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
        window.scrollY > 10 ? setTopPadding("1rem") : setTopPadding("3rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (

        <nav className="fixed w-screen top-0 z-50 py-4" style={{
            paddingTop: topPadding,
            height: navSize,
            backgroundColor: navColor,
            transition: "all 1s",
        }}>
            <ul className="flex justify-center gap-40 text-[26px] inline-block">
                <li className="relative cursor-pointer group">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EB143D] to-[#f7b3ce]">Kezdőlap</span>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f389b4] hidden group-hover:block"></div>
                </li>
                <li className="relative cursor-pointer group">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EB143D] to-[#f7b3ce]">Városok</span>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f389b4] hidden group-hover:block"></div>
                </li>
                <li className="relative cursor-pointer group">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EB143D] to-[#f7b3ce]">Érdekességek</span>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f389b4] hidden group-hover:block"></div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
