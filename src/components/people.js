/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
const People = (people) => {
	const { name } = people;
	const { age } = people;
	const { color } = people;

	return <div>
		<div
			style={ {
				backgroundColor: color,
			} }
		>Hello! {name} . Your age is {age}</div>
	</div>;
};

export default People;
