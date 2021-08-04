import { React } from 'react';
import context from '../core/context';

const Button = (eachButton) =>
	<button
		onClick={ () => context.actions.setCount(eachButton) }
	>{eachButton}</button>;

export default Button;
