import React, {useContext} from 'react';
import CountriesContext from '../../store/countries-context';
import Card from './Card';
import Filter from './Filter';
import classes from './Grid.module.css';

const Grid = () => {
	const countriesCtx = useContext(CountriesContext);
	var countries = countriesCtx.countriesList;

	return(
		<main className={`${classes["grid"]}`}>
			<div className="content-width">
				<Filter></Filter>
				<div className={`row`}>
					{countries.map( (country, i) => <Card key={`country-${i}`} className="" country={country}></Card>)}
				</div>
			</div>
		</main>
	);
}
export default Grid;

