import React, { useEffect, useRef, useState, useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { ReactComponent as ReactSVG } from '../svg/React_Logo.svg';
import { ReactComponent as SassSVG } from '../svg/Sass_Logo.svg';

import './Projects.scss';

export default function Projects(props) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);
    const project = useRef(null);

    const infoStyle = {
        background: `linear-gradient(0deg, ${theme.backgroundColorDarkest} 0%, rgba(255,0,0,0) 50%)`
        // backgroundImage: `-webkit-linear-gradient(to bottom, rgba(0,0,0,0), ${theme.backgroundColorDarkest}`  
    }


    useEffect(() => {

        function enter() {
            setHovered(!hovered);
        }

        const currentProject = project.current;

        currentProject.addEventListener('mouseenter', enter);

        return () => {
            currentProject.removeEventListener('mouseenter', enter);
        }

    }, [project, hovered])

    return (
        <div className="projects-container">
            <section className="projects">
                <div 
                    ref={project}
                    className={`project-container ${hovered && `project-grow`}`}
                    style={{
                        backgroundColor: `${theme.backgroundColorDarkest}`
                    }}
                >
                    <img src="../img/BitPressTopicPage.png" alt="BitPress Topic Page Screenshot" />

                    <div 
                        className="project-info"
                        style={infoStyle}
                    >
                        <div 
                            className="project-title"
                            style={{
                                border: `1px solid ${theme.color}`
                            }}
                        >
                            <h4>
                                <a href="https://bitpress-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    BitPress
                                </a>
                            </h4>
                        </div>

                        <div className="project-description">
                            <p>News articles based on the topics you want to read about.</p>
                        </div>

                        <div className="code-link">
                            <h5>
                                <a href="https://github.com/sarL3y/bitpress-client" target="_blank" rel="noopener noreferrer">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

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
                    </div>    
                </div>

                <div 
                    ref={project}
                    className={`project-container ${hovered && `project-grow`}`}
                    style={{
                        backgroundColor: `${theme.backgroundColorDarkest}`
                    }}
                >
                    <img src="../img/MoveOutHomePage.png" alt="MoveOut Homepage Screenshot" />

                    <div 
                        className="project-info"
                        style={infoStyle}
                    >
                        <div 
                            className="project-title"
                            style={{
                                border: `1px solid ${theme.color}`
                            }}
                        >
                            <h4>
                                <a href="https://bitpress-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    MoveOut
                                </a>
                            </h4>
                        </div>

                        <div className="project-description">
                            <p>News articles based on the topics you want to read about.</p>
                        </div>

                        <div className="code-link">
                            <h5>
                                <a href="https://github.com/sarL3y/bitpress-client" target="_blank" rel="noopener noreferrer">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

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
                    </div>    
                </div>

                <div 
                    ref={project}
                    className={`project-container ${hovered && `project-grow`}`}
                    style={{
                        backgroundColor: `${theme.backgroundColorDarkest}`
                    }}
                >
                    <img src="../img/BonAppetitSearchPage.png" alt="Bon Appetit Homepage Screenshot" />

                    <div 
                        className="project-info"
                        style={infoStyle}
                    >
                        <div 
                            className="project-title"
                            style={{
                                border: `1px solid ${theme.color}`
                            }}
                        >
                            <h4>
                                <a href="https://bitpress-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    Bon Appetit
                                </a>
                            </h4>
                        </div>

                        <div className="project-description">
                            <p>News articles based on the topics you want to read about.</p>
                        </div>

                        <div className="code-link">
                            <h5>
                                <a href="https://github.com/sarL3y/bitpress-client" target="_blank" rel="noopener noreferrer">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

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
                    </div>    
                </div>

                {/* <div 
                    ref={project}
                    className={`project-container ${hovered && `project-grow`}`}
                    style={{
                        backgroundColor: theme.backgroundColorDarkest,
                    }}
                >
                    <a href="https://moveout-capstone.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <div className="project-img">
                            <img src="../img/MoveOutHomePage.png" alt="Placeholder" />
                        </div>
                    </a>

                    <div 
                        className="project-title"
                        style={{
                            border: `1px solid ${theme.color}`
                        }}
                    >
                        <h4>
                            <a href="https://moveout-capstone.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                MoveOut
                            </a>
                        </h4>
                    </div>

                    <div className="project-description">
                        <p>A form for customers to submit information, and a dashboard for a company to view, edit, and delete the submissions.</p>
                    </div>

                    <div className="code-link">
                        <h5>
                            <a href="https://github.com/sarL3y/moveout-capstone" target="_blank" rel="noopener noreferrer">
                                {`<code>`}
                            </a>
                        </h5>
                    </div>

                    <div className="logos-list">
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                    </div>
                </div>
                
                <div 
                    ref={project}
                    className={`project-container ${hovered && `project-grow`}`}
                    style={{
                        backgroundColor: theme.backgroundColorDarkest,
                    }}
                >
                    <a href="https://sarl3y.github.io/bon-appetit/" target="_blank" rel="noopener noreferrer">
                        <div className="project-img">
                            <img src="../img/BonAppetitSearchPage.png" alt="Placeholder" />
                        </div>
                    </a>

                    <div 
                        className="project-title"
                        style={{
                            border: `1px solid ${theme.color}`
                        }}
                    >
                        <h4>
                            <a href="https://sarl3y.github.io/bon-appetit/" target="_blank" rel="noopener noreferrer">
                                Bon Appetit
                            </a>
                        </h4>
                    </div>

                    <div className="project-description">
                        <p>Search millions of recipes by the ingredients you have in your kitchen.</p>
                    </div>

                    <div className="code-link">
                        <h5>
                            <a href="https://sarl3y.github.io/bon-appetit/" target="_blank" rel="noopener noreferrer">
                                {`<code>`}
                            </a>
                        </h5>
                    </div>

                    <div className="logos-list">
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <ReactSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        <SassSVG fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                    </div>
                </div> */}
            </section>
        </div>
    )
}