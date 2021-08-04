import { React } from 'react';
import context from '../core/context';

const Operator = (eachOperator) =>
	<button
		onClick={ () => context.actions.setOperator(eachOperator) }
	>
		{eachOperator}</button>;

export default Operator;
