import React from 'react';

const CountriesContext = React.createContext({
	toggleDarkMode: () => {},
	getCountries: () => {},
	response: {},
	darkMode: false,
	countriesList: [],
	region: "",
});

export default CountriesContext;