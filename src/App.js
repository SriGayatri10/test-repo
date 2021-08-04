/* eslint-disable no-console */

/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */

import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Operator from './components/Operators';
import context from './core/context';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/'];

const App = () => {
	console.log(context.state);
	return <div className="layer">
		<div> {numbers.map(Button)} </div>
		<div>{operators.map(Operator)}</div>
		<div>{context.state.count}</div>
		<div>{context.state.operator}</div>
	</div>;
};

export default App;
