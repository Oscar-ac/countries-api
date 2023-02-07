import React, {useContext} from 'react';

import {Link} from 'react-router-dom';
import CountriesContext from '../../store/countries-context';

import classes from './Card.module.css';

const Card = (props) => {

	const countriesCtx = useContext(CountriesContext);

	const cardClickHandler = () => {
		countriesCtx.setSelectedCountry(props.country);
	}

	const name = props.country.name.common;

	return(
		<Link onClick={cardClickHandler} className={`col-12 col-sm-6 col-lg-3 ${classes["card--link"]}`} to={`/${name}`}>
			<div className={classes["card--padding"]}>
				<div className={` ${classes["card--custom"]} ${props.className}`}>
					<div className={classes["card--image-container"]}><img src={props.country.flags.svg} alt={`Flag of ${name}`}/></div>
					<ul className={classes["card--info"]}>
						<li className={`strong ${classes["card--name"]}`}>{name}</li>
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