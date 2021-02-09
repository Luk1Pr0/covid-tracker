import React, { useState, useEffect } from 'react';
import './App.css';

import Country from './components/Country';

function App() {

	const [covid, setCovid] = useState([
		{
			id: 1,
			Country: 'Poland',
			Date: "2020-12-19T20:16:12",
			NewConfirmed: 0,
			NewDeaths: 0,
			NewRecovered: 0,
			TotalConfirmed: 0,
			TotalDeaths: 0,
			TotalRecovered: 0,
		},
		{
			id: 2,
			Country: 'UK',
			Date: "2020-12-19T20:16:12",
			NewConfirmed: 25,
			NewDeaths: 155,
			NewRecovered: 2,
			TotalConfirmed: 453,
			TotalDeaths: 123,
			TotalRecovered: 1,
		},
		{
			id: 3,
			Country: 'Germany',
			Date: "2020-12-19T20:16:12",
			NewConfirmed: 123,
			NewDeaths: 453,
			NewRecovered: 53,
			TotalConfirmed: 543,
			TotalDeaths: 3123,
			TotalRecovered: 123,
		},
		{
			id: 3,
			Country: 'Germany',
			Date: "2020-12-19T20:16:12",
			NewConfirmed: 123,
			NewDeaths: 453,
			NewRecovered: 53,
			TotalConfirmed: 543,
			TotalDeaths: 3123,
			TotalRecovered: 123,
		},
		{
			id: 3,
			Country: 'Germany',
			Date: "2020-12-19T20:16:12",
			NewConfirmed: 123,
			NewDeaths: 453,
			NewRecovered: 53,
			TotalConfirmed: 543,
			TotalDeaths: 3123,
			TotalRecovered: 123,
		}
	]);

	// const getData = async () => {
	// 	const response = await fetch('http://cors-anywhere.herokuapp.com/api.covid19api.com/summary');
	// 	const data = await response.json();
	// 	setCovid(data.Countries);
	// }

	// useEffect(() => {
	// 	getData();
	// }, []);

	return (
		<div className="App">
			<div className="data">
				{
					covid.map(country => (
						<Country country={country} key={country.id} />
					))
				}
			</div>
		</div>
	);
}

export default App;