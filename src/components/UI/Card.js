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
		<Link onClick={cardClickHandler} className={`col-12 col-sm-6 col-lg-3 p-0 m-0 ${classes["card--link"]}`} to={`/${props.country.name.common}`}>
			<div className={classes["card--padding"]}>
				<div className={` ${classes["card--custom"]} ${props.className}`}>
					<div className={classes["card--image-container"]}><img src={props.country.flags.svg} alt=""/></div>
					<ul className={classes["card--info"]}>
						<li>{props.country.name.common}</li>
						<li><span className="strong">Population: </span>{props.country.population.toLocaleString()}</li>
						<li><span className="strong">Region: </span>{props.country.region}</li>
						<li><span className="strong">Capital City: </span>{props.country.capital}</li>
					</ul>
				</div>
			</div>
		</Link>
	);
}

export default Card;