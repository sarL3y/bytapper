import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ReactSVG } from '../svg/React_Logo.svg';
import { ReactComponent as SassSVG } from '../svg/Sass_Logo.svg';

import { ThemeContext } from '../context/ThemeContext';

import './Home.scss';

export default function Home(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="home-container">
            <section className="tease-container">
                <div className="intro">
                    <h1>
                        Hi, I'm Matt.
                    </h1>
                </div>

                <div className="tease">
                    <h2>
                        I work with:
                    </h2>
                    <div className="logos-list">
                        <ReactSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG className="logo"fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                    </div> 
                    <h3>
                        Check out my latest <span><NavLink exact to="/projects">projects</NavLink></span> and
                        read a little bit <span><NavLink exact to="/about">about</NavLink></span> me. Feel free 
                        to reach out and <span><NavLink exact to="/contact">contact</NavLink></span> me to tell me what's on your mind.
                    </h3>
                </div>
            </section>
        </div>
    )
}