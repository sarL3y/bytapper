import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import './About.scss';

export default function About(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="about-container">
            <header className="about-header">
                <div>
                    <h2>About</h2>
                </div>
            </header>

            <section className="about">
                <div className="about-item">

                </div>
            </section>
        </div>
    )
}