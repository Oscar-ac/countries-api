import React, {useContext} from 'react';
import classes from './Header.module.css';
import CountriesContext from '../../store/countries-context';

import { Moon } from 'react-bootstrap-icons';

import Button from './Button';

const Header = () => {

	const countriesCtx = useContext(CountriesContext);

	const darkModeClickHandler = () => {
		countriesCtx.toggleDarkMode();
	}

	console.log(countriesCtx.darkMode);


	return(
		<header className={classes["header"]}>
			<span className={classes["title"]}>Where in the world?</span>
			<Button className={`m-0 ${classes['button--dark-mode']}`} onClick={darkModeClickHandler}><Moon></Moon>Dark mode</Button>
		</header>
	);
}

export default Header;