import React, { useState, useEffect } from 'react';

const fontColor = {
    dark: '#37474f',
    light: '#dcedc8'
}

const backgroundColor = {
    dark: '#37474f',
    light: '#dcedc8'
}

const themes = {
    dark: {
        backgroundColor: backgroundColor.dark,
        color: fontColor.light
    },
    light: {
        backgroundColor: backgroundColor.light,
        color: fontColor.dark
    }
}

const initialThemeState = {
    dark: true,
    theme: themes.light,
    toggleTheme: () => {}
}

const ThemeContext = React.createContext(initialThemeState);

function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const localStorageIsDark = localStorage.getItem('dark') === 'true';
        setIsDark(localStorageIsDark);
      }, [isDark])

    const toggleTheme = () => {
        const localStorageIsDark = !isDark;
        localStorage.setItem('dark', JSON.stringify(localStorageIsDark));
        // setIsDark(isDark => !isDark);
        setIsDark(localStorageIsDark);
        console.log('toggling!');
    }

    const theme = isDark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };