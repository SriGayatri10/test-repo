/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import './App.scss';

// eslint-disable-next-line max-lines-per-function
const App = () => {
	// eslint-disable-next-line no-unused-vars
	const a = 0;

	return <div style={ {
		position: 'absolute',
		height: '300px',
		width: '300px',
		border: '1px solid black',
		top: 'calc(50% - 150px)',
		left: 'calc(50% - 150px)',
		backgroundColor: 'blue',
	  } }
		      >
		<div style={ {
			position: 'absolute',
			height: '200px',
			width: '200px',
		  border: '1px solid black',
			top: 'calc(50% - 100px)',
			left: 'calc(50% - 100px)',
			backgroundColor: 'crimson',
				 } }
		>
			<div style={ {
				position: 'absolute',
	      height: '100px',
				width: '100px',
				border: '1px solid black',
			  top: 'calc(50% - 50px)',
				left: 'calc(50% - 50px)',
				backgroundColor: 'green',
				 } }
			/>
		</div>
	</div>;
};

export default App;
