const setCount = ({ data }) => ({
	count: data,
});
const setOperator = ({ data }) => ({
	operator: data,
});
const inputs = ({ data }) => ({
	input: data,
});
const actions = {
	setCount,
	setOperator,
	inputs,
};

export default actions;
