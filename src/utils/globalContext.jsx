import { createContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Create GlobalContext
export const GlobalContext = createContext(undefined);

// ContextProvider component to provide global state and actions
export const ContextProvider = ({ children }) => {
    const [text, setText] = useState(null);

    return (
        <GlobalContext.Provider value={{ text, setText }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for animating text with GSAP and ScrollTrigger
export const useAnimateText = (text, triggerOnScroll = true) => {
    const textRef = useRef(null);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (typeof text === 'string') {
            const chars = text.split('').map((char, index) => ({
                char,
                id: `char-${index}`,
                isSpace: char === ' ',
            }));
            setElements(chars);
        } else {
            console.error('TextShimmerEffect expects a string as the text prop.');
            setElements([]);
        }
    }, [text]);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const chars = textRef.current.querySelectorAll(".char-scroll");

        if (chars.length > 0) {
            const timeline = gsap.timeline({
                onComplete: () => gsap.to(chars, { opacity: 1, duration: 0.3, delay: 0.1 })
            });

            timeline.fromTo(chars, { opacity: 0.2 }, { opacity: 1, stagger: 0.1, repeat: 0, yoyo: true });

            if (triggerOnScroll) {
                ScrollTrigger.create({
                    animation: timeline,
                    trigger: textRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play none none none",
                    once: true,
                });
            }
        }
    }, [elements, triggerOnScroll]);

    return textRef;
};

// Component usage example
export const TextShimmerEffect = ({ text, style }) => {
    const textRef = useAnimateText(text);

    return (
        <span ref={textRef} style={style}>
            {text.split('').map((char, index) => (
                <span key={index} className="char-scroll">
                    {char}
                </span>
            ))}
        </span>
    );
};
