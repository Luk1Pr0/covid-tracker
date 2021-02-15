import React, { useState, useEffect } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import Home from './components/Home';
import CountryList from './components/CountryList';
import Loader from './components/Loader';

const App = () => {

	const [countries, setCountries] = useState([]);
	const [worldCases, setWorldCases] = useState([{}]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			const response = await fetch(`https://api.covid19api.com/summary`);
			const data = await response.json();
			setCountries(data.Countries);
			setWorldCases(data.Global);
			setLoading(false);
		} catch (error) {
			console.log('Error getting data', error);
		}
	}

	const searchCountries = (e) => {
		setSearch(e.target.value);
	}

	// const rawDate = data.Date.split('T');
	// const formattedDate = rawDate[0].split('-').reverse().join('/');
	// const formattedTime = rawDate[1].split('.')[0].split(':').slice(0, 2).join(':');

	return (
		<div className="App">
			{
				!loading ?
					(
						<div>
							<Home data={worldCases} />
							<SearchForm search={searchCountries} />
							<CountryList countries={countries} input={search} />
						</div>
					) :
					<Loader />
			}
		</div>
	);
}

export default App;