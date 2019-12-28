import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { heading_3 } from '../variables/FontSizes';

// TODO: Section off Nav Bar into different quadrants (Right side for login/signup)
// TODO: Left side for Name of App
const Header = () => {
	return (
		<HeaderContainer>
			<nav>
				<Link className="home" to="/">
					<div>Houzzly</div>
				</Link>
				<ul>
					<li>
						<Link className="sign-up" to="/signup">
							Sign In
						</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

// Style
const HeaderContainer = styled.div`
	nav {
		display: flex;
		justify-content: space-between;
		max-width: 1280px;
		margin: 0 auto;
		align-items: center;
		font-size: ${heading_3};
		text-decoration: none;
	}
`;

export default Header;
