import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './views/landing/LandingPage';
import SignUp from './views/signup/SignUp';

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={LandingPage} />
					<Route path="/signup" exact component={SignUp} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
