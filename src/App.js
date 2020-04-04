import React from 'react';
import './App.css';
import Login from './components/login/login';
import Nav from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/login" component={Login} />
					<Redirect exact from="/" to="/login" />
					<Route path="/dashboard" component={Nav} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
