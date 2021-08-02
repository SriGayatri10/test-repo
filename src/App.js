/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */

import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Operator from './components/Operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '*', '/'];
const App = () => <div>
	<div> {numbers.map(Button)} </div>;
	<div>{operators.map(Operator)}</div>;
</div>;

export default App;
