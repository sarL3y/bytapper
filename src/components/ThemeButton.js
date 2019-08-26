import React, { useContext } from 'react';

import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
    const { theme, isDark, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            type='button'
            onClick={toggleTheme}
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
            }}
        >
            Toggle for {isDark ? 'Light' : 'Dark'}
        </button>
    );
}