// add score and name to th API

const submit = async (uName, uScore) => {
  // get values from the UI
  // validation and POST
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mrycTVYI662YTF4mF23h/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: uName,
      score: uScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export default submit;