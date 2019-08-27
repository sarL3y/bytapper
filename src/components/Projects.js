import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import './Projects.scss';

export default function Projects(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="projects-container">
            <header className="projects-header">
                <div>
                    <h2>Projects</h2>
                </div>
            </header>

            <section className="projects">
                <div 
                    className="project-container grow"
                    style={{
                        backgroundColor: theme.backgroundColorLight,
                    }}
                >
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/300" alt="Placeholder" /></a>
                    <h3>Project Title</h3>
                    <p>Short description about what the app does</p>
                    <h4>Stack:</h4>
                    <ul>
                        <li>React</li>
                        <li>Sass/SCSS</li>
                        <li>Google Firebase/Firestore</li>
                        <li>Continuous Integration with TravisCI</li>
                        <li>Auto-deployment with Heroku</li>
                        <li>Testing with Jest/Enzyme</li>
                    </ul>
                </div>
                <div 
                    className="project-container grow"
                    style={{
                        backgroundColor: theme.backgroundColorLight,
                    }}
                >
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/300" alt="Placeholder" /></a>
                    <h3>Project Title</h3>
                    <p>Short description about what the app does</p>
                    <h4>Stack:</h4>
                    <ul>
                        <li>React</li>
                        <li>Sass/SCSS</li>
                        <li>Google Firebase/Firestore</li>
                        <li>Continuous Integration with TravisCI</li>
                        <li>Auto-deployment with Heroku</li>
                        <li>Testing with Jest/Enzyme</li>
                    </ul>
                </div>
                <div 
                    className="project-container grow"
                    style={{
                        backgroundColor: theme.backgroundColorLight,
                    }}
                >
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/300" alt="Placeholder" /></a>
                    <h3>Project Title</h3>
                    <p>Short description about what the app does</p>
                    <h4>Stack:</h4>
                    <ul>
                        <li>React</li>
                        <li>Sass/SCSS</li>
                        <li>Google Firebase/Firestore</li>
                        <li>Continuous Integration with TravisCI</li>
                        <li>Auto-deployment with Heroku</li>
                        <li>Testing with Jest/Enzyme</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}