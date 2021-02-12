import React from 'react';

const Home = ({ data }) => {

	console.log(data);

	return (
		<div style={homeStyle}>
			<h3 title={`Last Updated: ${data.Date}`}><span style={label}>Total Cases: </span>{data.TotalConfirmed}</h3>
			<h3 title={`Last Updated: ${data.Date}`}> <span style={label}>Total Deaths: </span>{data.TotalDeaths}</h3>
			<h3 title={`Last Updated: ${data.Date}`}> <span style={label}>Total Recoveries: </span>{data.TotalRecovered}</h3>
		</div>
	);
}

const homeStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	background: 'rgb(70, 79, 79)',
	padding: '1rem 0',
}

const label = {
	color: 'gold'
}

export default Home;
