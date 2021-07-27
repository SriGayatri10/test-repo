/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import './App.scss';
import data from './data';
import People from './components/people';
// eslint-disable-next-line max-lines-per-function
const App = () => {
	console.log(data);

	return <div className="App">
		{People(data.people)}</div>;
	// eslint-disable-next-line no-unused-vars
};

export default App;
