import { React } from 'react';
import context from '../core/context';

const Input = () =>
	<input
		type="text"
		onChange={ (evt) => context.actions.inputs(evt.target.value) }
	/>;

export default Input;
