import React from 'react';

import Country from './Country';

const CountryList = ({ countries, input }) => {

	const country = countries.map((country) => {
		if (country.Country.toLowerCase().includes(input.toLowerCase())) {
			return <Country key={country.ID} data={country} />
		} else {
			countries.map(country => <Country key={country.ID} data={country} />);
		}
	});

	return (
		<div style={container}>
			{country}
		</div>
	)
}

const container = {
	height: 'auto',
	color: 'white',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
}

export default CountryList;
