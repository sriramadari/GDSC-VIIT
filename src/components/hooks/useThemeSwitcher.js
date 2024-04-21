import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: light)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            let newMode;
            if (userPref) {
                newMode = userPref === "dark" ? "dark" : "light";
            } else {
                newMode = mediaQuery.matches ? "dark" : "light";
                window.localStorage.setItem("theme", newMode);
            }

            setMode(newMode);
        };

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
