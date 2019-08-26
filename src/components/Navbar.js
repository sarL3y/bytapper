import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import ThemeButton from './ThemeButton';

import './Navbar.scss';


export default function Navbar(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <nav
            role='navigation'
            className="nav"
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
            }}
        >   
            <div>
                Tapper
            </div>
            <div>
                Projects
            </div>
            <div>
                About
            </div>
            <div>
                Contact
            </div>
            <ThemeButton />
        </nav>
)}