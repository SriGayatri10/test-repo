/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import Person from './person';

const People = (people) => {
	const count = people.length;

	return <div>
		<div>{people.map(Person)}</div>
		<div> People Count : {count} </div>
	</div>;
};

export default People;
