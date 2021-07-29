/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
const Person = (people) => {
	const { name } = people;
	const { age } = people;
	const { color } = people;

	return <div
		style={ {
			backgroundColor: color,
		} }
	       >Hello! {name} . Your age is {age}</div>;
};

export default Person;
