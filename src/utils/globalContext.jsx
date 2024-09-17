import React, { createContext, useEffect, useReducer } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { reducer, palettes } from "./reducer";

gsap.registerPlugin(ScrollTrigger);

export const initialState = {
    theme: 'palette-1', // default theme
};

export const GlobalContext = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme } = state;

    // Sync theme with the body data attribute
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Function to switch to the next theme
    const switchTheme = () => {
        const currentThemeIndex = palettes.indexOf(state.theme); // Get current index
        const nextThemeIndex = (currentThemeIndex + 1) % palettes.length; // Get next theme index
        const nextTheme = palettes[nextThemeIndex]; // Get the actual theme name
        dispatch({
            type: 'SWITCH_COLOR',
            payload: nextTheme,
        });
    };

   

    const contextValue = {
        theme,
        switchTheme,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};
