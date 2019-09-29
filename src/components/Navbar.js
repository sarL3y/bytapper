import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import ThemeButton from './ThemeButton';

import './Navbar.scss';

export default function Navbar(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div 
            className="nav-wrapper"
            style={{
                borderBottom: `1px solid ${theme.color}`,
            }}
        >
            <nav
                role='navigation'
                className="nav"
                aria-label="main navigation"
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color
                }}
            >   
                <div className="nav-grow">
                    <NavLink exact to="/Home">
                        home
                    </NavLink>
                </div>
                <div className="nav-grow">
                    <NavLink exact to="/Projects">
                        projects
                    </NavLink>
                </div>
                <div className="nav-grow">
                    <NavLink exact to="/About">
                        about
                    </NavLink>
                </div>
                <div className="nav-grow">
                    <NavLink exact to="/Contact">
                        contact
                    </NavLink>
                </div>
                <ThemeButton />
            </nav>
        </div>
)}