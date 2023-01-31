import React from 'react';

const CountriesContext = React.createContext({
	countriesList: [],
	newFilter: () => {},
	setSelectedCountry: () => {},
	selectedCountry: {},
	getBorderObjects: () => {},
});

export default CountriesContext;