const setCount = ({ data }) => ({
	count: data,
});
const setOperator = ({ data }) => ({
	operator: data,
});
const actions = {
	setCount,
	setOperator,
};

export default actions;
