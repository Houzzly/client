import React from 'react';
import styled from 'styled-components';

const LandingPage = () => {
	return (
		<LandingPageContainer>
			<div className="landing-page">
				<div className="hello">
					<h1 className="title">LandingPage</h1>
				</div>
			</div>
		</LandingPageContainer>
	);
};

const LandingPageContainer = styled.div`
	.landing-page {
		display: flex;
		background: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
		background-size: cover;
		background-position: center;
		height: 100vh;
	}

	.title {
		color: white;
		font-size: 34px;
		text-align: center;
		font-size: 60px;
		line-height: 72px;
	}

	.hello {
		display: block;
	}
`;

export default LandingPage;
