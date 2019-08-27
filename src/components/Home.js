import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export default function Home(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="home-container">
            <header 
                className="container-header"
                style={{
                    width: '100%'
                }}
            >
                <div>
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
                </div>
            </header>
        </div>
    )
}