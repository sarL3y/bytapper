import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
import './App.css';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

export default function App() {
	const { theme } = useContext(ThemeContext);

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