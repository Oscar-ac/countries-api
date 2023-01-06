import React,{useContext} from 'react';
import CountriesContext from '../../store/countries-context';
import { useNavigate } from "react-router-dom";

import Button from './Button';

import classes from './Interior.module.css';


const Interior = (props) => {

	const countriesCtx = useContext(CountriesContext);
	const country = countriesCtx.selectedCountry;
	const navigate = useNavigate();

	console.log(country);

	const goBack = () => {
		navigate("/");
	}

	return (
		<main>
			<Button onClick={goBack}>{`go back <---`}</Button>
			<div className={` ${classes["interior"]} ${props.className}`}>
				<div><img src={country.flags.svg} alt=""/></div>
				<div>{country.name.common}</div>
				<div>nativeName</div>
				<div>{country.population}</div>
				<div>{country.region}</div>
				<div>{country.subRegion}</div>
				<div>{country.capital}</div>
				<div>top level domain</div>
				<div>{country.currencies.name}</div>
				<div>languages</div>
				<div>Border Countries</div>
			</div>			
		</main>
	);
}

export default Interior;