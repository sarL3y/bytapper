import React, { useContext } from 'react';

import { Route } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import './Container.scss';

export default function Container(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container"
            style={{
                backgroundColor: theme.backgroundColorDark,
                transition: `all .2s ease-in-out`
            }}
        >
            <Route exact path="/" component={Home} style={{transition: `all .2s ease-in-out`}}/>
            <Route exact path="/Home" component={Home} style={{transition: `all .2s ease-in-out`}}/>
            <Route exact path="/Projects" component={Projects} style={{transition: `all .2s ease-in-out`}}/>
            <Route exact path="/About" component={About} style={{transition: `all .2s ease-in-out`}}/>
            <Route exact path="/Contact" component={Contact} style={{transition: `all .2s ease-in-out`}}/>
        </div>
    )
}