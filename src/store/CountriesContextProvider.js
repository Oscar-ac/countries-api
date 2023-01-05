import React, {useState, useEffect} from 'react';
import CountriesContext from './countries-context';

const CountriesContextProvider = (props) => {

	const [response, setResponse] = useState({});
	const [countriesList, setCountriesList] = useState([]);

	useEffect(() => {
	// const getCountriesHandler = () => {
		console.log("before fetch");
		fetch("https://restcountries.com/v3.1/all")
			.then(response => {
					let responseHolder = response;
					console.log(response.status);
					if(responseHolder.status === 200){
						return response.json();
					} else {
						setResponse({JSON: response.JSON, status: response.status})
						// throw new Error("invalid location");
					}	
			})
			.then(res => {
			    // setResponse({
			    // 			JSON: res,
	    		// 			status: 200,
	    		// 		});
			    // console.log(response);
			    // console.log(response.JSON);
				setCountriesList(res);
				// console.log(countriesList);
			});
			console.log("after fetch")
	// }
	}, []);

	// const getCountries = () => {
	// 	console.log(response);
	// 	setCountriesList(response.JSON);

	// 	console.log(countriesList);
	// }

	const countriesContext = {
		// darkMode: darkMode	
		// getCountries:  getCountriesHandler,
		response: response,
		countriesList: countriesList,
	}

	return(
		<CountriesContext.Provider value={countriesContext}>
			{props.children}
		</CountriesContext.Provider>
	);
};

export default CountriesContextProvider;