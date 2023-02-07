import React, {useState, useEffect} from 'react';
import CountriesContext from './countries-context';

const CountriesContextProvider = (props) => {

	const [countriesList, setCountriesList] = useState([]);
	const [defaultCountriesList, setDefaultCountriesList] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({});

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then(response => {
					let responseHolder = response;
					if(responseHolder.status === 200){
						return response.json();
					} 
			})
			.then(res => {
				setCountriesList(res);
				setDefaultCountriesList(res);
			});
	}, []);

	const newFilterHandler = (searchValue, optionValue) => {
		if(defaultCountriesList.length === 0){
			return;
		};
		const optionFilterResult = defaultCountriesList.filter(country => country.region.toLowerCase().includes(optionValue.toLowerCase()))
		
		var searchFilterTarget = optionFilterResult;

		if(optionValue === ""){
			searchFilterTarget = defaultCountriesList;
		}
		const searchFilterResult = searchFilterTarget.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));
		setCountriesList(searchFilterResult);
	}

	const setSelectedCountryHandler = (country) => {
		setSelectedCountry(country);
		window.localStorage.setItem("currentCountry", JSON.stringify(country));
	}

	const getBorderObjectsHandler = (borderCountries) => {
		if(borderCountries === undefined) return;
		const borderObjects = [];
		borderCountries.forEach(function(borderCountry){
			const borderFilterResult = defaultCountriesList.filter(country => country.cca3.includes(borderCountry));
			borderObjects.push(borderFilterResult[0]);
		});

		return borderObjects;
	}

	const countriesContext = {
		countriesList: countriesList,
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