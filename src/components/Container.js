import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import './Container.scss';

export default function Container() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container">
            <header 
                className="container-header"
                style={{
                    border: `1px solid ${theme.color}`,
                    width: '100%'
                }}
            >
                <div>
                    <h2>Hi, I'm Tapper</h2>
                    <h3>I love bringing ideas to life.</h3>
                </div>
            </header>
        </div>
    )
}