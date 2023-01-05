import React, {useEffect, useState} from 'react';

import classes from './Filter.module.css';

const Filter = (props) => {

	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		let x = setTimeout(() => {
			if(inputValue !== ""){
				// weatherCtx.changeLocation(inputValue);
				console.log("effect triggered");
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

	return (
		<section className={`${classes["fitler"]} ${props.className}`}>
			<input onChange={inputChangeHandler} type="text"/>

			<select>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceana">Oceana</option>
			</select>
		</section>
	);
}

export default Filter;