import React from 'react'

const Country = ({ data }) => {

	const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = data;

	return (
		<div style={card}>
			<h2>{Country}</h2>
			<div>
				<h3>Total Cases: {TotalConfirmed}</h3>
				<h3>Total Deaths: {TotalDeaths}</h3>
				<h3>Total Recoveries: {TotalRecovered}</h3>
			</div>
		</div>
	)
}

const card = {
	background: 'rgb(10, 70, 79)',
	margin: '1rem',
	padding: '2rem',
	width: '25%',
	minHeight: '15rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around'
}

export default Country;
