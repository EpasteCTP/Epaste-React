import React from 'react'; 
import { Switch, Route} from 'react-router-dom';
import App from '../App/App.js';

const Main = (props) => (
	<Switch>
		<Route exact path="/" component={App} />
	</Switch>

);

export default Main;