import React, { useState, useEffect } from 'react';
import './App.css';

import CountryList from './components/CountryList';
import Home from './components/Home';

const App = () => {

	const [countries, setCountries] = useState([]);
	const [worldCases, setWorldCases] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const response = await fetch(`https://api.covid19api.com/summary`);
			const data = await response.json();
			setCountries(data.Countries);
			setWorldCases(data.Global);
		} catch (error) {
			console.log('Error getting data', error);
		}
	}

	// const rawDate = data.Date.split('T');
	// const formattedDate = rawDate[0].split('-').reverse().join('/');
	// const formattedTime = rawDate[1].split('.')[0].split(':').slice(0, 2).join(':');

	return (
		<div className="App">
			<Home data={worldCases} />
			<CountryList countries={countries} />
		</div>
	);
}

export default App;