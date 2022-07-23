import createList from './display.js';

// get data [ name and score ]from the API

const apiData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mrycTVYI662YTF4mF23h/scores/');
  const { result: scores } = await response.json();
  const sortScores = scores.sort((a, b) => b.score - a.score);
  createList(sortScores);
};

export default apiData;