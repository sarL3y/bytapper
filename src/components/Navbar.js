import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import ThemeButton from './ThemeButton';

export default function Navbar(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <nav
            role='navigation'
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
            }}
        >
            <ThemeButton />
        </nav>
)}