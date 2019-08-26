import React, { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
import './App.css';

import Navbar from './components/Navbar';

export default function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div 
			className="App"
			style={{
                backgroundColor: theme.backgroundColor,
				color: theme.color,
				border: `1px solid ${theme.color}`
			}}
		>
			<Navbar />
			<header className="App-header">
			<h1>by: Tapper</h1>
			<h2>portfolio in progress...</h2>
			</header>
		</div>
	);
};