/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';

const Number = (eachNumber) =>
	<button
		onClick={ () => context.actions.setCount(eachNumber) }
	>{eachNumber}</button>;

export default Number;
