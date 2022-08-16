import './index.css';
import apiData from './modules/getRecord.js';
import submit from './modules/add.js';

const submition = document.querySelector('.bttn');
const refresh = document.querySelector('.refresh-bttn');
const enterName = document.querySelector('.uName');
const enterScore = document.querySelector('.uScore');

submition.addEventListener('click', (e) => {
  e.preventDefault();
  submit(enterName.value, enterScore.value);
  enterName.value = '';
  enterScore.value = '';
});

refresh.addEventListener('click', () => {
  apiData();
});

apiData();
