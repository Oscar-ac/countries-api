import React from 'react';

const CountriesContext = React.createContext({
	countriesList: [],
	newFilter: () => {},
	setSelectedCountry: () => {},
	selectedCountry: {},
});

export default CountriesContext;