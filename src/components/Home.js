import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as React2SVG } from '../svg/React_Logo_2.svg';
import { ReactComponent as Sass2SVG } from '../svg/Sass_Logo_2.svg';
import { ReactComponent as GoogleSVG } from '../svg/Google_Logo.svg';
import { ReactComponent as HerokuSVG } from '../svg/Heroku_Logo.svg';
import { ReactComponent as MochaSVG } from '../svg/Mocha_Logo.svg';
import { ReactComponent as HtmlSVG } from '../svg/HTML_Logo.svg';
import { ReactComponent as GithubSVG } from '../svg/Github_Logo.svg';
import { ReactComponent as AwsSVG } from '../svg/AWS_Logo.svg';
import { ReactComponent as CssSVG } from '../svg/CSS_Logo.svg';
import { ReactComponent as ExpressSVG } from '../svg/Express_Logo.svg';
import { ReactComponent as JsSVG } from '../svg/JS_Logo.svg';
import { ReactComponent as JquerySVG } from '../svg/Jquery_Logo.svg';
import { ReactComponent as MongoDbSVG } from '../svg/MongoDB_Logo.svg';
import { ReactComponent as NodeSVG } from '../svg/Node_Logo.svg';

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

                <div 
                    className="fancy-border mobile-hidden"
                    style={{
                        backgroundColor: theme.color
                    }}
                >
                </div>

                <div className="tease">
                    <h2>
                        I work with:
                    </h2>
                    <div className="logos-list">
                        <React2SVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <JsSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <NodeSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <ExpressSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <MongoDbSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <Sass2SVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <GoogleSVG className="logo"fill={theme.color} style={{ width: '36px', height: '36px' }}/>
                        <AwsSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <MochaSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <GithubSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <HerokuSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <HtmlSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <CssSVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
                        <JquerySVG className="logo"fill={theme.color} style={{ width: '40px', height: '40px' }}/>
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