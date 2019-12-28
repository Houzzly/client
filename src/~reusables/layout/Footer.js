import React from 'react';

import styled from 'styled-components';
import { heading_4 } from '../variables/FontSizes';

// TODO: Complete footer design
const Footer = () => {
	return (
		<FooterContainer>
			<div>
				<p>
					Made by <a href="https://github.com/IsraelAde">Israel Aderogba</a> &{' '}
					<a href="https://github.com/IsaacAderogba">Isaac Aderogba</a>
				</p>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	height: 10vh;
	min-height: 60px;

	div {
		display: flex;
		align-items: center;
		margin: 0 auto;
		max-width: 1280px;
	}

	p {
		font-size: ${heading_4};
	}

	a {
		text-decoration: none;
	}
`;

export default Footer;
