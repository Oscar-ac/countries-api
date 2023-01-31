import React, {useContext, useEffect, useState} from 'react';
import CountriesContext from '../../store/countries-context';


import classes from './Filter.module.css';

const Filter = (props) => {

	const [inputValue, setInputValue] = useState("")
	const [optionValue, setOptionValue] = useState("");
	const countriesCtx = useContext(CountriesContext);

	useEffect(() => {
		let x = setTimeout(() => {
			if(inputValue !== ""){
				countriesCtx.newFilter(inputValue, optionValue);
			}
		}, 1000);

		return () => {
	      	clearTimeout(x);
	    }
	}, [inputValue, optionValue]);

	const inputChangeHandler = (event) => {
		setInputValue(event.target.value);
	};	

	const selectChangeHandler = (event) => {
		setOptionValue(event.target.value);
	};

	return (
		<section className={`${classes["fitler"]} ${props.className}`}>
			<input onChange={inputChangeHandler} type="text"/>

			<select onChange={selectChangeHandler}>
				<option value="" default>Select a region</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</section>
	);
}

export default Filter;