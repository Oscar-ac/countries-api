import React, {useContext} from 'react';

import CountriesContext from '../../store/countries-context';

import Button from './Button';

const Header = () => {

	const countriesCtx = useContext(CountriesContext);

	const getCountriesClickHandler = () => {
		countriesCtx.getCountries();
	}

	return(
		<header>
			Where in the world?
			<Button>Dark mode</Button>
		</header>
	);
}

export default Header;