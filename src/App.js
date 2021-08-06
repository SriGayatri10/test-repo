/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable no-console */

/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */

import { React } from 'react';
import './App.scss';
import context from './core/context';
import setInput from './components/Input';

const App = () => {
	console.log(context.state);
	return <div className="text-box">{setInput()}</div>;
};

export default App;
