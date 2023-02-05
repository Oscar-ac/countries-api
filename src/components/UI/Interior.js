import React,{useContext, useEffect} from 'react';
import CountriesContext from '../../store/countries-context';
import { useNavigate, Link } from "react-router-dom";

import Button from './Button';

import classes from './Interior.module.css';


const Interior = (props) => {

	const countriesCtx = useContext(CountriesContext);
	var country = countriesCtx.selectedCountry;
	const navigate = useNavigate();

	if(Object.keys(country).length === 0 && country.constructor === Object){
		country = JSON.parse(window.localStorage.getItem("currentCountry"));	
	}

	const borderObjects = countriesCtx.getBorderObjects(country.borders);

	const goBack = () => {
		navigate("/");
	}

	const borderLinkHandler = (borderCountry) => {
		countriesCtx.setSelectedCountry(borderCountry);
	}

	console.log(country);
	const nativeNamesArray = Object.values(country.name.nativeName);
	const languageNamesArray = Object.values(country.languages);
	const currencyArray = Object.values(country.currencies);

	return (
		<main>
			<Button onClick={goBack}>{`go back <---`}</Button>
			<div className={` ${classes["interior"]} ${props.className}`}>
				<div><img src={country.flags.svg} alt=""/></div>
				<div>{country.name.common}</div>
				<div>Native Name: {nativeNamesArray.map((nativeName, i) => <span key={`native-name-${i}`}>{nativeName.common} </span>)}</div>
				{borderObjects !== undefined && borderObjects[0] !== undefined && <div>Bordering: {borderObjects.map( (borderCountry, i) => <span key={`borderCountry-${i}`}><Link onClick={() => borderLinkHandler(borderCountry)} to={`/${borderCountry.name.common}`}> {borderCountry.name.common}</Link> </span>)}</div>}
				<div>Population: {country.population.toLocaleString()}</div>
				<div>Region: {country.region}</div>
				{country.subregion && <div>Subregion: {country.subregion}</div>}
				<div>Capital City: {country.capital}</div>
				{country.tld && <div>Top level domain: {country.tld.map( (tld, i) => <span key={`tld-${i}`}>{tld}</span>)}</div>}
				<div>Currency: {currencyArray.map((currency, i) => <span key={`currency-${i}`}>{currency.name} </span>)}</div>
				<div>Languages: {languageNamesArray.map((language, i) => <span key={`lang-${i}`}>{language} </span>)}</div>
			</div>			
		</main>
	);
}

export default Interior;