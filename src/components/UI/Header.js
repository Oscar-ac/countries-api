import React from 'react';
import classes from './Header.module.css';
import { Moon } from 'react-bootstrap-icons';
import Button from './Button';

const Header = (props) => {
	return(
		<header className={`${classes["header"]}`}>
			<div className={`content-width ${classes["header-content--flex"]}`}>
				<span className={classes["title"]}>Where in the world?</span>
				<Button className={`m-0 px-0 ${classes['button--dark-mode']}`} onClick={props.darkModeFunction}><Moon></Moon> Dark mode</Button>
			</div>
		</header>
	);
}

export default Header;