import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './views/landing/LandingPage';
import SignUp from './views/signup/SignUp';
import Header from './views/header_footer/Header';
import Footer from './views/header_footer/Footer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={LandingPage} />
					<Route path="/signup" exact component={SignUp} />
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
