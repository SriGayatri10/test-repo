/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
// import img from '../logo192.png';
const Person = (people) => {
	const { name } = people;
	const { age } = people;
	//  const { style } = people;
	const { color } = people;
	// const { background } = people;

	return <div
		style={ {
			background: color,
			// fontFamily: style,
			// background: URL('https://bit.ly/3j8C3W1'),
		} }
	       >Hello! {name} . Your age is {age}</div>;
};

export default Person;
