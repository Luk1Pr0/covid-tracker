import React from 'react';

const CountryList = ({ countries }) => {

	return (
		<div style={{ background: 'whitesmoke', height: '80vh', color: 'black' }}>
			{countries.map(country => (
				<h3>{country.TotalDeaths}</h3>
			))}
		</div>
	)
}

export default CountryList;
