import React from 'react';

const Country = ({ country }) => {

	console.log(country);
	const { id, Country, Date, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

	return (
		<div className='country'>
			<div className="head__container">
				<h1 style={headerStyle}><span style={labelStyle}>Country: </span>{Country}</h1>
			</div>
			<div className="content__container">
				<div className="left__content">
					<h3><span style={labelStyle}>New Cases: </span>{NewConfirmed}</h3>
					<h3><span style={labelStyle}>New Deaths: </span>{NewDeaths}</h3>
					<h3><span style={labelStyle}>New Recoveries: </span>{NewRecovered}</h3>
				</div>
				<div className="right__content">
					<h3><span style={labelStyle}>Total Cases: </span>{TotalConfirmed}</h3>
					<h3><span style={labelStyle}>Total Deaths: </span>{TotalDeaths}</h3>
					<h3><span style={labelStyle}>Total Recoveries: </span>{TotalRecovered}</h3>
				</div>
			</div>
		</div>
	)
}

const headerStyle = {
	margin: '1rem',
}

const labelStyle = {
	color: 'rgba(212, 123, 12)'
}

export default Country;
