/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
const randomBetween = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const randomCharacter = () => {
	const charac = randomBetween(65, 90);
	const alphabet = String.fromCharCode(charac);

	return alphabet;
};
const randomString = () => {
	let string = '';

	[1, 2, 3, 4].map(() => (string += randomCharacter()));
	return string;
};

export default randomString;
