import React from 'react';

const CountriesContext = React.createContext({
	countriesList: [],
	newSearch: () => {},
	newFilter: () => {},
	setSelectedCountry: () => {},
	selectedCountry: {},
});

export default CountriesContext;