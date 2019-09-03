import React, { useContext } from 'react';

import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SunIcon } from '../svg/Sun_Icon.svg';

import './ThemeButton.scss';

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            type='button'
            onClick={toggleTheme}
            className="theme-toggle-button"
            style={{
                backgroundColor: theme.backgroundColorDarkest,
                color: theme.color,
                transition: `all .5s ease-in-out`
            }}
        >
            <SunIcon  fill={theme.color} style={{ width: '20px', height: '20px' }}/>
        </button>
    )
}