import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO: Section of Nav Bar into different quadrants (Right side for login/signup)
// TODO: Left side for Name of App
const Header = () => {
	return (
		<HeaderContainer>
			<h1>Header</h1>
			<Link to="/">Houzzly</Link>
			<Link to="/signup">Sign In</Link>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	h1 {
		font-size: 24px;
	}
`;

export default Header;
