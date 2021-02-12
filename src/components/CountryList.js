import React from 'react';

import Country from './Country';

const CountryList = ({ countries }) => {

	return (
		<div style={container}>
			{countries.map(country => (
				<Country key={country.ID} data={country} />
			))}
		</div>
	)
}

const container = {
	height: 'auto',
	color: 'white',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	position: 'relative',
	top: '5rem',
}

export default CountryList;
