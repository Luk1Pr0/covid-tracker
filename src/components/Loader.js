import React from 'react';

const Loader = () => {
	return (
		<div style={container}>
			<h1>Loading Data...</h1>
		</div>
	)
}

const container = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '2rem'
}

export default Loader;
