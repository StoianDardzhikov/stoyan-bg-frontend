import "./global.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Menu() {
    const buttonRefs = useRef([]);

    useEffect(() => {
        buttonRefs.current.forEach((button, index) => {
            gsap.fromTo(
                button,
                { color: 'white' },
                {
                    color: '#0f0515',
                    duration: 1.5,
                    ease: "sine.in",
                    scrollTrigger: {
                        trigger: '.landing',
                        start: "bottom top",
                        toggleActions: "play none reverse none",
                        markers: false, // Enable for debugging, shows the start/end markers
                    },
                }
            );
        });
    }, []);


    return (
        <nav className="menu">
            <div className="menu-left">
                <button className="menu-button"
                        ref={(el) => (buttonRefs.current[0] = el)}
                >Home<span className="underline"></span></button>
            </div>
            <div className="menu-right">
                <button className="menu-button"
                        ref={(el) => (buttonRefs.current[1] = el)}
                >About Me<span className="underline"></span></button>
                <button className="menu-button"
                        ref={(el) => (buttonRefs.current[2] = el)}
                >Portfolio<span className="underline"></span></button>
            </div>
        </nav>
    );
}

export default Menu;
