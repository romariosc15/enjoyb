"use client"
import React, { createContext, useState, useContext } from 'react';
 const AppContext = createContext();
 export const AppProvider = ({ children }) => {
    const [navbarTheme, setNavbarTheme] = useState('default');
    const value = {
        navbarTheme,
        setNavbarTheme,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
 };
 export const useAppContext = () => useContext(AppContext)