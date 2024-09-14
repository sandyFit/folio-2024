import { createContext, useEffect, useRef, useState, useReducer } from "react";
import { reducer, palettes } from "./reducer";

export const initialState =  {
    theme: 'palette-1'
}

export const GlobalContext = createContext(undefined);

// ContextProvider component to provide global state and actions
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { theme } = state

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const switchTheme = () => {
        dispatch({
            type: 'SWITCH_COLOR',
            payload: (state.theme + 1) % palettes.length
        });
    };


    const contextValue = {
        theme, switchTheme,

    }

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

