import React, { useContext } from 'react';
import { Router, Route, withRouter } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import './Container.scss';

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/Home', name: 'Home', Component: Home },
    { path: '/Projects', name: 'About', Component: Projects },
    { path: '/About', name: 'About', Component: About },
    { path: '/Contact', name: 'Contact', Component: Contact },
];

function Container(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="app-container"
            style={{
                backgroundColor: theme.backgroundColorDark,
            }}
        >
            <div className="container">
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                <Component 
                                    style={{
                                        backgroundColor: theme.backgroundColorDarkest,
                                        color: theme.color,
                                        transition: `all .5s ease-in-out`
                                    }}
                                />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </div>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} /> */}
        </div>
    )
}

export default withRouter(Container);