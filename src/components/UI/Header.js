import React, {useContext} from 'react';

import CountriesContext from '../../store/countries-context';

import Button from './Button';

const Header = () => {

	const countriesCtx = useContext(CountriesContext);

	const darkModeClickHandler = () => {
		countriesCtx.toggleDarkMode();
	}

	console.log(countriesCtx.darkMode);


	return(
		<header>
			Where in the world?
			<Button onClick={darkModeClickHandler}>Dark mode</Button>
		</header>
	);
}

export default Header;