import React, { useState, useEffect } from 'react';

const themes = {
    dark: {
        backgroundColor: '#353b37',
        color: '#d5f5de'
    },
    light: {
        backgroundColor: '#d5f5de',
        color: '#353b37'
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