import { rndString } from '@laufire/utils/random';
import config from './config';

const seed = {
	question: rndString(config.refreshIDLength),
	answer: '',
	score: 0,
};

export default seed;
