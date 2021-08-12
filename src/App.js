/* eslint-disable no-console */

import { React } from 'react';
import './App.scss';
import context from './core/context';
import Input from './components/Input';

const App = () => {
	console.log(context.state);
	return <div className="text-box">
		<div>score:{context.state.score}</div>
		<div>{context.state.question}</div>
		<div>{Input()}</div>
	</div>;
};

export default App;
