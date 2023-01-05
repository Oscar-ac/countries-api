import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {

	// console.log(props.country);

	return(
		<div className={`col-3 p-0 ${classes["card--custom"]} ${props.className}`}>
			<div><img src={props.country.flags.svg} alt=""/></div>
			<div>{props.country.name.common}</div>
			<div>{props.country.population}</div>
			<div>{props.country.region}</div>
			<div>{props.country.capital}</div>
		</div>
	);
}

export default Card;