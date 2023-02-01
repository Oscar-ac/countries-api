import React, {useContext} from 'react';

import {Link} from 'react-router-dom';
import CountriesContext from '../../store/countries-context';

import classes from './Card.module.css';

const Card = (props) => {

	const countriesCtx = useContext(CountriesContext);

	const cardClickHandler = () => {
		countriesCtx.setSelectedCountry(props.country);
		console.log(props.country);
	}

	// console.log(props.country);

	return(
		<Link onClick={cardClickHandler} className="col-3 p-0" to={`/${props.country.name.common}`}>
			<div className={` ${classes["card--custom"]} ${props.className}`}>
				<div><img src={props.country.flags.svg} alt=""/></div>
				<div>{props.country.name.common}</div>
				<div>{props.country.population}</div>
				<div>{props.country.region}</div>
				<div>{props.country.capital}</div>
			</div>
		</Link>
	);
}

export default Card;