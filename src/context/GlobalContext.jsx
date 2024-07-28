import React, { createContext, useState } from 'react';

// Kontekst yaratish
export const GlobalContext = createContext();

// Kontekst provayderi
export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        theme:false
    });

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
};