"use client";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
    const preferDarkQuery = "(prefers-color-schema:dark)";
    const storageKey = "theme";

   //function that toggles between dark and light themes mode
    const toggleTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");

        } else {
            document.documentElement.classList.remove("dark");

        }

        window.localStorage.setItem(storageKey, theme)
    };

     //Get user's prefered theme mode
    const getUserPreference = () => {
        const userPref = window.localStorage.getItem(storageKey)
        if (userPref)  {
        return userPref;
        }
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
    };

    const [mode, setMode] = useState("dark")
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const handleChange = () => {
            const newMode = getUserPreference();
            setMode(newMode);
            toggleTheme(newMode)
        };

        handleChange();
        mediaQuery.addEventListener("change",handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange)
        };
    },[])


    useEffect(() => {
        toggleTheme(mode)
    },[mode])


    return [mode, setMode]

}

