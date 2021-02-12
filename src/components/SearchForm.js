import React, { useState } from 'react';

const SearchForm = ({ search }) => {

	const onChange = (e) => {
		search(e)
	}

	return (
		<form style={container}>
			<label htmlFor="search">Search countries</label>
			<br />
			<input type="text" name='search' placeholder='E.g. Poland' onChange={onChange} />
		</form>
	)
}

const container = {
	zIndex: '10',
	width: '100%',
	margin: '1rem 0'
}

export default SearchForm;
