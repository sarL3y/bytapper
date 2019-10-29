import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
import ReactGA from 'react-ga';

import './App.scss';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function initializeReactGA() {
    ReactGA.initialize('UA-151174005-1');
	ReactGA.pageview('/home');
	console.log('tracking you at: ' + window.location);
}

export default function App() {
	const { theme } = useContext(ThemeContext);

	initializeReactGA();

	return (
		<main
			role='main'
			className='App'
			style={{
                backgroundColor: theme.backgroundColorDarkest,
				color: theme.color,
				transition: `all .5s ease-in-out`
			}}
		>
			<Navbar />
			<Container />
			<Footer />
		</main>
	);
};