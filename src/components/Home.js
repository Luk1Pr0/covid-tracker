import React from 'react';

const Home = ({ data, date }) => {

	// const formattedDate = newDate[0].split('-').reverse().join('/');
	// const formattedTime = newDate[1].split('.')[0].split(':').slice(0, 2).join(':');

	const formatDate = () => {
		const formattedDate = date[0].split('-').reverse().join('/');
		const formattedTime = date[1].split('.')[0].split(':').slice(0, 2).join(':');
		const finalDate = `${formattedDate} at ${formattedTime}`
		return finalDate;
	}

	return (
		<div style={homeStyle}>
			<h4><span style={label}>Last Updated: <br /></span>{formatDate()}</h4>
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
