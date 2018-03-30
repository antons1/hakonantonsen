import React from 'react';
import { Link } from 'react-router';
import './NavigationLink.less';

const NavigationLink = (props) =>
<li className="nav-list-item">
	<h1>
		<Link to={props.to} className="nav-list-item__link">{props.text}</Link>
	</h1>
</li>;

export default NavigationLink;