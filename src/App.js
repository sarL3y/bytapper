import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
import './App.css';

import Navbar from './components/Navbar';
import Container from './components/Container';

export default function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<main
			role='main'
			className='App'
			style={{
                backgroundColor: theme.backgroundColor,
				color: theme.color,
			}}
		>
			<Navbar />
			<Container />
		</main>
	);
};