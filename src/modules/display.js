// diplay data on th UI

const scoreList = document.querySelector('.scoreList');
const createList = (data) => {
  scoreList.innerHTML = '';
  data.forEach((data) => {
    const li = `<li class="score-list">${data.user}: ${data.score}</li>`;
    scoreList.insertAdjacentHTML('beforeend', li);
  });
};

export default createList;