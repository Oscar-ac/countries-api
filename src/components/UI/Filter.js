import React, {useContext, useEffect, useState} from 'react';
import CountriesContext from '../../store/countries-context';

import { Search } from 'react-bootstrap-icons';

import classes from './Filter.module.css';

const Filter = (props) => {

	const [inputValue, setInputValue] = useState("")
	const [optionValue, setOptionValue] = useState("");
	const countriesCtx = useContext(CountriesContext);

	useEffect(() => {
		let x = setTimeout(() => {
			countriesCtx.newFilter(inputValue, optionValue);
		}, 500);

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
		<section className={`${classes["filter"]} ${props.className}`}>
			<div className={classes["search-block"]}>	
				<div className={classes["search-icon"]}><Search></Search></div>
				<input className={classes["search"]} placeholder="search for a country..." onChange={inputChangeHandler} type="text"/>
			</div>
			<select className={classes["option"]} onChange={selectChangeHandler}>
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