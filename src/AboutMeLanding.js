import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./global.css"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMeLanding = () => {
    const sectionRefs = useRef([]);

    function myYears() {
        const date1 = new Date('2003-11-18');
        const date2 = new Date();
        const year1 = date1.getFullYear();
        const year2 = date2.getFullYear();
        let diffInYears = year2 - year1;

        // Adjust if the current year hasn't reached the same day/month in date2
        const isBeforeAnniversary =
            date2.getMonth() < date1.getMonth() ||
            (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate());

        if (isBeforeAnniversary) {
            diffInYears--;
        }

        return diffInYears;
    }

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { x: index % 2 === 0 ? "-100vw" : "100vw", opacity: 1 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "sine.in",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "50% 90%",
                        scrub: 2, // This will enable scrubbing effect
                        markers: false, // Enable for debugging, shows the start/end markers
                    },
                }
            );
        });
    }, []);

    return (
        <div className="scroll-container">
            <div className="aboutMeLanding">
                <section
                    className="section"
                    ref={(el) => (sectionRefs.current[0] = el)}
                    style={{ backgroundColor: "#70f3e1" }}
                >
                    <h1 className="sectionText">BACKEND DEVELOPER.</h1>
                </section>
                <section
                    className="section"
                    ref={(el) => (sectionRefs.current[1] = el)}
                    style={{ backgroundColor: "#f7bc99" }}
                >
                    <h1 className="sectionText">{myYears()} YEARS OLD.</h1>
                </section>
                <section
                    className="section"
                    ref={(el) => (sectionRefs.current[2] = el)}
                    style={{ backgroundColor: "#f76e63" }}
                >
                    <h1 className="sectionText">FROM BULGARIA.</h1>
                </section>
            </div>
        </div>
    );
};

export default AboutMeLanding;
