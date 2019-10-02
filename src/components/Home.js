import React, { useContext } from 'react';

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
                        Hi, I'm Matt
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
                        See what I've done here: 
                    </h3>
                    <h4>
                        Feel free to reach out and contact me to collaborate
                    </h4>
                </div>
            </section>
            {/* <div className="container-left">
                <header 
                    className="container-header"
                >
                    <h2>Hi, I'm Matt.</h2>
                    <h3>{`I love bringing ideas to `} 
                        <span 
                            className="life-button" 
                            style={{ cursor: 'pointer' }}
                        >
                            life
                        </span>
                        .
                    </h3>
                </header>
            </div>
            
            <div className="container-right">
                <header 
                    className="container-header"
                >
                    <h4>View my work here, and feel free to reach out if you'd like to collaborate.</h4>
                </header>
            </div> */}
        </div>
    )
}