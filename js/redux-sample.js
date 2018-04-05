import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application.jsx';
import Home from './components/home.jsx';
import Hello from './components/hello.jsx';
import Secret from './components/secret.jsx';


// import react router deps
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore, { history } from './reduxStore';


ReactDOM.render((
    <Provider store={reduxStore}>
	    <Router history={history}>
			<Route path = "/" component = {Application}>
				<IndexRoute component = {Home} />
				<Route path = "hello" component = {Hello} />
				<Route path = "secret" component = {Secret} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('wrapper'));