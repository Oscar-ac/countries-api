import React, {useContext, useEffect, useState} from 'react';
import CountriesContext from '../../store/countries-context';


import classes from './Filter.module.css';

const Filter = (props) => {

	const [inputValue, setInputValue] = useState("");
	// const [selectValue, setSelectValue] = useState("");
	const countriesCtx = useContext(CountriesContext);

	useEffect(() => {
		let x = setTimeout(() => {
			if(inputValue !== ""){
				countriesCtx.newSearch(inputValue);
				// console.log("effect triggered");
			}
		}, 1000);

		return () => {
	      	clearTimeout(x);
	    }
	}, [inputValue]);

	const inputChangeHandler = (event) => {
		let inputValue = event.target.value;
		setInputValue(event.target.value);
	};	

	const selectChangeHandler = (event) => {
		countriesCtx.newFilter(event.target.value);
	};

	return (
		<section className={`${classes["fitler"]} ${props.className}`}>
			<input onChange={inputChangeHandler} type="text"/>

			<select onChange={selectChangeHandler}>
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