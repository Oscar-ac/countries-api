import React, {useState, useEffect} from 'react';
import CountriesContext from './countries-context';

const CountriesContextProvider = (props) => {

	const [response, setResponse] = useState({});
	const [countriesList, setCountriesList] = useState([]);
	// const [fetchArgSearch, setFetchArgSearch] = useState("");
	// const [fetchArgFilter, setFetchArgFilter] = useState("");
	const [fetchString, setFetchString] = useState("https://restcountries.com/v3.1/all");
	const [selectedCountry, setSelectedCountry] = useState({});

	useEffect(() => {
		console.log("before fetch");
		fetch(fetchString)
			.then(response => {
					let responseHolder = response;
					console.log(response.status);
					if(responseHolder.status === 200){
						return response.json();
					} else {
						setResponse({JSON: response.JSON, status: response.status})
						throw new Error("invalid location");
					}	
			})
			.then(res => {
				setCountriesList(res);
			});
			console.log("after fetch")
	}, [fetchString]);

	const newSearchHandler = (searchValue) => {
		console.log(searchValue);
		setFetchString("https://restcountries.com/v3.1/name/" + searchValue);
	}

	const newFilterHandler = (filterValue) => {
		console.log(filterValue);
		setFetchString("https://restcountries.com/v3.1/region/" + filterValue);
	}

	const setSelectedCountryHandler = (country) => {
		setSelectedCountry(country);
	}

	const countriesContext = {
		countriesList: countriesList,
		newSearch: newSearchHandler,
		newFilter: newFilterHandler,
		selectedCountry: selectedCountry,
		setSelectedCountry: setSelectedCountryHandler
	}

	return(
		<CountriesContext.Provider value={countriesContext}>
			{props.children}
		</CountriesContext.Provider>
	);
};

export default CountriesContextProvider;