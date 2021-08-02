/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */

import { React } from 'react';
import './App.scss';
import Button from './components/Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => <div> {numbers.map(Button)} </div>;

export default App;
