import React, {useState, useEffect} from 'react';
import CountriesContext from './countries-context';

const CountriesContextProvider = (props) => {

	const [response, setResponse] = useState({});
	const [countriesList, setCountriesList] = useState([]);
	const [defaultCountriesList, setDefaultCountriesList] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({});

	useEffect(() => {
		// console.log("before fetch");
		fetch("https://restcountries.com/v3.1/all")
			.then(response => {
					let responseHolder = response;
					// console.log(response.status);
					if(responseHolder.status === 200){
						return response.json();
					} else {
						setResponse({JSON: response.JSON, status: response.status})
						// throw new Error("invalid location");
					}	
			})
			.then(res => {
				setCountriesList(res);
				setDefaultCountriesList(res);
			});
			// console.log("after fetch")
	}, []);

	const newFilterHandler = (searchValue, optionValue) => {
		const optionFilterResult = defaultCountriesList.filter(country => country.region.toLowerCase().includes(optionValue.toLowerCase()))
		const searchFilterResult = optionFilterResult.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));

		setCountriesList(searchFilterResult);
	}

	const setSelectedCountryHandler = (country) => {
		setSelectedCountry(country);
		window.localStorage.setItem("currentCountry", JSON.stringify(country));
		console.log("selected country", country);
		// console.log(JSON.stringify(selectedCountry));
	}

	const getBorderObjectsHandler = (borderCountries) => {
		if(borderCountries === undefined) return;
		const borderObjects = [];
		borderCountries.forEach(function(borderCountry){
			const borderFilterResult = defaultCountriesList.filter(country => country.cca3.includes(borderCountry));
			console.log(borderFilterResult[0]);
			borderObjects.push(borderFilterResult[0]);
		});

		return borderObjects;
	}

	const countriesContext = {
		countriesList: countriesList,
		// newSearch: newSearchHandler,
		newFilter: newFilterHandler,
		selectedCountry: selectedCountry,
		setSelectedCountry: setSelectedCountryHandler,
		getBorderObjects: getBorderObjectsHandler,
	}

	return(
		<CountriesContext.Provider value={countriesContext}>
			{props.children}
		</CountriesContext.Provider>
	);
};

export default CountriesContextProvider;