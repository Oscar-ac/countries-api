import React,{useContext, useEffect} from 'react';
import CountriesContext from '../../store/countries-context';
import { useNavigate, Link } from "react-router-dom";

import Button from './Button';

import classes from './Interior.module.css';


const Interior = (props) => {

	const countriesCtx = useContext(CountriesContext);
	var country = countriesCtx.selectedCountry;
	const navigate = useNavigate();
	// var borderObjs = []
	if(Object.keys(country).length === 0 && country.constructor === Object){
		country = JSON.parse(window.localStorage.getItem("currentCountry"));	
	}
	const borderObjects = countriesCtx.getBorderObjects(country.borders);

	console.log(borderObjects);
	const goBack = () => {
		navigate("/");
	}

	const borderLinkHandler = (borderCountry) => {
		countriesCtx.setSelectedCountry(borderCountry);
	}


	return (
		<main>
			<Button onClick={goBack}>{`go back <---`}</Button>
			<div className={` ${classes["interior"]} ${props.className}`}>
				<div><img src={country.flags.svg} alt=""/></div>
				<div>{country.name.common}</div>
				{borderObjects[0] !== undefined && <div>{borderObjects.map( (borderCountry, i) => <span key={`borderCountry-${i}`}><Link onClick={() => borderLinkHandler(borderCountry)} to={`/${borderCountry.name.common}`}> {borderCountry.name.common}</Link>, </span>)}</div>}
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