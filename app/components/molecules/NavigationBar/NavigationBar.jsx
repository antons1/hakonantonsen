import React from 'react';
import './NavigationBar.less';

import NavigationLink from '../../atoms/NavigationLink/NavigationLink';

const NavigationBar = ({ links, visible }) =>
	<nav className="main-nav">
	<ul className={"main-nav__list" + (visible ? " main-nav__list--visible" : "")}>
		{links.map((link, index) => <NavigationLink key={index} to={link.to} text={link.text} />)}
	</ul>
	</nav>;

export default NavigationBar;