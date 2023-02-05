import React,{useContext, useEffect} from 'react';
import CountriesContext from '../../store/countries-context';
import { useNavigate, Link } from "react-router-dom";
import Button from './Button';

import { ArrowLeft } from 'react-bootstrap-icons';
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
		<main className={`${props.className} ${classes["interior"]}`}>
			<Button className="mx-0" onClick={goBack}><ArrowLeft></ArrowLeft> Back</Button>
			<div className={`row align-items-center`}>
				<div className="col-sm-6"><img className={classes["flag"]} src={country.flags.svg} alt=""/></div>
				<div className="col-sm-6">
					<h1 className={classes["country-name"]}>{country.name.common}</h1>	
					<div className="row">
						<ul className="col-6">
							<li><span className="strong">Native Name:</span> {nativeNamesArray.map((nativeName, i) => <span key={`native-name-${i}`}>{nativeName.common} </span>)}</li>
							<li><span className="strong">Population:</span> {country.population.toLocaleString()}</li>
							<li><span className="strong">Region:</span> {country.region}</li>
							{country.subregion && <li><span className="strong">Subregion:</span> {country.subregion}</li>}
							<li><span className="strong">Capital City:</span> {country.capital}</li>
						</ul>
						<ul className="col-6">
							{country.tld && <li><span className="strong">Top level domain:</span> {country.tld.map( (tld, i) => <span key={`tld-${i}`}>{tld}</span>)}</li>}
							<li><span className="strong">Currency:</span> {currencyArray.map((currency, i) => <span key={`currency-${i}`}>{currency.name} </span>)}</li>
							<li><span className="strong">Languages:</span> {languageNamesArray.map((language, i) => <span key={`lang-${i}`}>{language} </span>)}</li>
						</ul>
					</div>
					{borderObjects !== undefined && borderObjects[0] !== undefined && <div className={classes["borders"]}><span className="strong">Bordering:</span> {borderObjects.map( (borderCountry, i) => <Button key={`borderCountry-${i}`} className={classes["button--border"]}><Link onClick={() => borderLinkHandler(borderCountry)} to={`/${borderCountry.name.common}`}> {borderCountry.name.common}</Link> </Button>)}</div>}

				</div>			
			</div>			
		</main>
	);
}

export default Interior;