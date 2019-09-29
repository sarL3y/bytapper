import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import './Footer.scss';

import { ReactComponent as LinkedInSVG } from '../svg/Linkedin_Logo.svg';
import { ReactComponent as GitHubSVG } from '../svg/Github_Logo.svg';
import { ReactComponent as GmailSVG } from '../svg/Gmail_Logo.svg';

export default function Footer(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div 
            className="footer-wrapper"
            style={{
                borderTop: `1px solid ${theme.color}`,
            }}
        >
            <footer className="footer">
                <div className="footer-grow">
                    <a href="https://www.linkedin.com/in/matt-tapper" target="_blank" rel="noopener noreferrer">
                        <LinkedInSVG fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="https://www.github.com/sarL3y/" target="_blank" rel="noopener noreferrer">
                        <GitHubSVG fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="mailto:matt.tapper@gmail.com" target="_blank" rel="noopener noreferrer">
                        <GmailSVG fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                    </a>
                </div>
            </footer>
        </div>
    )
}