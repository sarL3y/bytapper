import React, { useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Success from './Success';

import './Container.scss';

const routes = [
    { path: '/', name: 'home', Component: Home },
    { path: '/home', name: 'home', Component: Home },
    { path: '/projects', name: 'projects', Component: Projects },
    { path: '/about', name: 'about', Component: About },
    { path: '/contact', name: 'contact', Component: Contact },
    { path: '/success', name: 'success', Component: Success },
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
                                        transition: `all .5s ease-in`
                                    }}
                                />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Container);