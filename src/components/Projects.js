import React, { useEffect, useRef, useState, useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

import { ReactComponent as React2SVG } from '../svg/React_Logo_2.svg';
import { ReactComponent as Sass2SVG } from '../svg/Sass_Logo_2.svg';
import { ReactComponent as GoogleSVG } from '../svg/Google_Logo.svg';
import { ReactComponent as HerokuSVG } from '../svg/Heroku_Logo.svg';
import { ReactComponent as MochaSVG } from '../svg/Mocha_Logo.svg';
import { ReactComponent as HtmlSVG } from '../svg/HTML_Logo.svg';
import { ReactComponent as GithubSVG } from '../svg/Github_Logo.svg';
import { ReactComponent as CssSVG } from '../svg/CSS_Logo.svg';
import { ReactComponent as ExpressSVG } from '../svg/Express_Logo.svg';
import { ReactComponent as JsSVG } from '../svg/JS_Logo.svg';
import { ReactComponent as JquerySVG } from '../svg/Jquery_Logo.svg';
import { ReactComponent as MongoDbSVG } from '../svg/MongoDB_Logo.svg';
import { ReactComponent as NodeSVG } from '../svg/Node_Logo.svg';

import './Projects.scss';

export default function Projects(props) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);
    const project = useRef(null);

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
                        style={{
                            background: `linear-gradient(0deg, ${theme.backgroundColorDarkest} 1%, #ffffff1a 60%)`
                        }}
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
                            <p>News articles provided for the topics you want to read about.</p>
                        </div>

                        <div className="code-link">
                            <h5>
                                <a href="https://github.com/sarL3y/bitpress-client" target="_blank" rel="noopener noreferrer" className="code">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

                        <div className="logos-list">
                            <React2SVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <Sass2SVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <GoogleSVG className="logo" fill={theme.color} style={{ width: '28px', height: '28px' }}/>
                            <HerokuSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <GithubSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
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
                        style={{
                            background: `linear-gradient(0deg, ${theme.backgroundColorDarkest} 1%, #ffffff1a 60%)`
                        }}
                    >
                        <div 
                            className="project-title"
                            style={{
                                border: `1px solid ${theme.color}`
                            }}
                        >
                            <h4>
                                <a href="https://moveout-capstone.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    MoveOut
                                </a>
                            </h4>
                        </div>

                        <div className="project-description">
                            <p>Form submission, editing, deletion, and more practice with a NoSQL database.</p>
                        </div>

                        <div className="code-link">
                            <h5>
                                <a href="https://github.com/sarL3y/moveout-capstone" target="_blank" rel="noopener noreferrer" className="code">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

                        <div className="logos-list">
                            <NodeSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <ExpressSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <MongoDbSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <HtmlSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <CssSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <MochaSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <HerokuSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <GithubSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
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
                        style={{
                            background: `linear-gradient(0deg, ${theme.backgroundColorDarkest} 1%, #ffffff1a 60%)`
                        }}
                    >
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
                                <a href="https://sarl3y.github.io/bon-appetit/" target="_blank" rel="noopener noreferrer" className="code">
                                    {`<code>`}
                                </a>
                            </h5>
                        </div>

                        <div className="logos-list">
                            <HtmlSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <CssSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <JsSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <JquerySVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                            <GithubSVG className="logo" fill={theme.color} style={{ width: '30px', height: '30px' }}/>
                        </div>  
                    </div>    
                </div>
            </section>
        </div>
    )
}