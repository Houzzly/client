import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Section of Nav Bar into different quadrants (Right side for login/signup)
// TODO: Left side for Name of App
const NavBar = () => {
	return (
		<div>
			<nav>
				<Link to="/">Houzzly</Link>
				<Link to="/signup">SignUp</Link>
			</nav>
		</div>
	);
};

export default NavBar;
