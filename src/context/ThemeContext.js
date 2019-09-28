import React, { useState, useEffect } from 'react';

const fontColor = {
    darkOnLight: '#37474f',
    lightOnDark: '#fbfbf8'
}

const backgroundColor = {
    darkest: '#1c313a',
    dark: '#37474f',
    mid: '#455a64',
    light: '#718792',
    lightest: '#fbfbf8',
}

const themes = {
    dark: {
        backgroundColorDarkest: backgroundColor.darkest,
        backgroundColorDark: backgroundColor.dark,
        backgroundColorMid: backgroundColor.mid,
        colorDarkOnLight: fontColor.darkOnLight,
        color: fontColor.lightOnDark
    },
    light: {
        backgroundColorDarkest: backgroundColor.lightest,
        backgroundColorDark: backgroundColor.lightest,
        backgroundColorMid: backgroundColor.mid,
        color: fontColor.darkOnLight,
        colorLightOnDark: fontColor.lightOnDark
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
    }

    const theme = isDark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };