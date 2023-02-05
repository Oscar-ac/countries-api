import React from 'react';

const CountriesContext = React.createContext({
	countriesList: [],
	newFilter: () => {},
	setSelectedCountry: () => {},
	selectedCountry: {},
	getBorderObjects: () => {},
	// toggleDarkMode: () => {},
	// darkMode: false,
});

export default CountriesContext;