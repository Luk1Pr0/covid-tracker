import React, { useState, useEffect } from 'react';
import './App.css';

import CountryList from './components/CountryList';
import Home from './components/Home';

const App = () => {

	const [cases, setCases] = useState({});

	const getData = async () => {
		try {
			const response = await fetch('https://api.covid19api.com/summary');
			const data = await response.json();
			setCases(data);
		} catch (error) {
			console.log('Error getting data', error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<Home data={cases.Global} />
			<CountryList countries={cases.Countries} />
		</div>
	);
}

export default App;