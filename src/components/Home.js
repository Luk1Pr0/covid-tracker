import React from 'react';

const Home = ({ data }) => {

	return (
		<div style={homeStyle}>
			<h3><span style={label}>Total Cases: </span>{data.TotalConfirmed}</h3>
			<h3><span style={label}>Total Deaths: </span>{data.TotalDeaths}</h3>
			<h3><span style={label}>Total Recoveries: </span>{data.TotalRecovered}</h3>
		</div>
	);
}

const homeStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	background: 'rgb(10, 70, 79)',
	padding: '1.5rem 0',
	width: '100%',
	zIndex: '10'
}

const label = {
	color: 'gold',
}

export default Home;
