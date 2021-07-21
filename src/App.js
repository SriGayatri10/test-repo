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
		border: '2px solid black',
		top: '30%',
		left: '40%',
		backgroundColor: 'green',
	  } }
		      >
		<div style={ {
			position: 'absolute',
			height: '200px',
			width: '200px',
		  border: '2px solid black',
			top: '15%',
			left: '15%',
			backgroundColor: 'blue',
				 } }
		>
			<div style={ {
				position: 'absolute',
	      height: '100px',
				width: '100px',
				border: '2px solid black',
			  top: '20%',
				left: '20%',
				backgroundColor: 'crimson',
				 } }
			/>
		</div>
	</div>;
};

export default App;
