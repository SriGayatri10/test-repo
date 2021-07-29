
import { React } from 'react';
import './App.scss';
import data from './data';
import People from './components/people';

const App = () => {
	const { people } = data;

	return <div className="App">
		{People(people)}</div>;
};

export default App;
