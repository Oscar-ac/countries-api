import React, {useContext} from 'react';
import CountriesContext from '../../store/countries-context';
import Card from './Card';
import Filter from './Filter';
import classes from './Grid.module.css';

const Grid = () => {

	const countriesCtx = useContext(CountriesContext);

	// if(countriesCtx.status === 200){
		var countries = countriesCtx.countriesList;
		// console.log(countries);
	// }

	return(
		<main className={`${classes["grid"]}`}>
			<Filter></Filter>
			<div className={`row ${classes["grid-wrap"]}`}>
				{countries.map( (country, i) => <Card key={`country-${i}`} className="" country={country}></Card>)}
			</div>
		</main>
	);
}
export default Grid;

