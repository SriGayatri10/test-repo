/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import Number from './Number-in-row';

const Button = (eachButton) =>
	<div>{eachButton.map(Number)}</div>;

export default Button;
