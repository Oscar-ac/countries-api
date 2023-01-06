import React, {useContext} from 'react';

import CountriesContext from '../../store/countries-context';

import Button from './Button';

const Header = () => {

	const countriesCtx = useContext(CountriesContext);

	return(
		<header>
			Where in the world?
			<Button>Dark mode</Button>
		</header>
	);
}

export default Header;