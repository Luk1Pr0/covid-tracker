import { findByLabelText } from '@testing-library/react';
import React from 'react';

import GlobalItem from './GlobalItem';

const Home = ({ global }) => {

	return (
		<div style={globalStyle}>
			{console.log('Global Item', global)}
			<h2>Global Cases: {global.TotalConfirmed}</h2>
			<h2>Global Deaths: {global.TotalDeaths}</h2>
			<h2>Global Recoveries: {global.TotalRecovered}</h2>
		</div>
	);
}

const globalStyle = {
	display: 'flex',
	justifyContent: 'space-around',
}

export default Home;
