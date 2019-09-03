// import React, { useContext } from 'react';
import React from 'react';

// import { ThemeContext } from '../context/ThemeContext';

import './Home.scss';

export default function Home(props) {
    // const { theme } = useContext(ThemeContext);

    return (
        <div className="home-container">
            <div className="container-left">
                <header 
                    className="container-header"
                    style={{
                        width: '100%'
                    }}
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
                    style={{
                        width: '100%'
                    }}
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
        </div>
    )
}