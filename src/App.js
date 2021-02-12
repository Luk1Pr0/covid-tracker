import React, { useState, useEffect } from 'react';
import './App.css';

import CountryList from './components/CountryList';
import Home from './components/Home';

function App() {

	// const [covid, setCovid] = useState([
	// {
	// 	id: 3,
	// 	Country: 'Germany',
	// 	Date: "2020-12-19T20:16:12",
	// 	NewConfirmed: 123,
	// 	NewDeaths: 453,
	// 	NewRecovered: 53,
	// 	TotalConfirmed: 543,
	// 	TotalDeaths: 3123,
	// 	TotalRecovered: 123,
	// }
	// ]);


	const [data, setData] = useState({});

	const fetchData = async () => {
		const response = await fetch('https://api.covid19api.com/summary');
		const data = await response.json();
		setData(data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<CountryList countries={data.Countries} />
			<Home global={data.Global} />
		</div>
	);
}

export default App;