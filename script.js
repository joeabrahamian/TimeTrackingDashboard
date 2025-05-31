let jsonData;

// DOM ELEMENTS
const work = document.getElementById("work");
const play = document.getElementById("play");
const study = document.getElementById("study");
const exercise = document.getElementById("exercise");
const social = document.getElementById("social");
const selfCare = document.getElementById("self-care");

// DOM BUTTONS
const dailyButton = document.getElementById("daily-button");
const weeklyButton = document.getElementById("weekly-button");
const monthlyButton = document.getElementById("monthly-button");

const currentWork = document.getElementById("current-work");
const previousWork = document.getElementById("previous-work");
const currentPlay = document.getElementById("current-play");
const previousPlay = document.getElementById("previous-play");
const currentStudy = document.getElementById("current-study");
const previousStudy = document.getElementById("previous-study");
const currentExercise = document.getElementById("current-exercise");
const previousExercise = document.getElementById("previous-exercise");
const currentSocial = document.getElementById("current-social");
const previousSocial = document.getElementById("previous-social");
const currentSelfCare = document.getElementById("current-self-care");
const previousSelfCare = document.getElementById("previous-self-care");

function fetchAPI() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
      updateDom(jsonData);
    });
}

function updateDom(data) {
  updateHeaders(data);
}

function updateHeaders(data) {
  work.innerText = data[0].title;
  play.innerText = data[1].title;
  study.innerText = data[2].title;
  exercise.innerText = data[3].title;
  social.innerText = data[4].title;
  selfCare.innerText = data[5].title;
}

function updateTimeDaily(data) {
  currentWork.innerText = `${data[0].timeframes.daily.current}hrs`;
  previousWork.innerText = `${data[0].timeframes.daily.previous}hrs`;
  currentPlay.innerText = `${data[1].timeframes.daily.current}hrs`;
  previousPlay.innerText = `${data[1].timeframes.daily.previous}hrs`;
  currentStudy.innerText = `${data[2].timeframes.daily.current}hrs`;
  previousStudy.innerText = `${data[2].timeframes.daily.previous}hrs`;
  currentExercise.innerText = `${data[3].timeframes.daily.current}hrs`;
  previousExercise.innerText = `${data[3].timeframes.daily.previous}hrs`;
  currentSocial.innerText = `${data[4].timeframes.daily.current}hrs`;
  previousSocial.innerText = `${data[4].timeframes.daily.previous}hrs`;
  currentSelfCare.innerText = `${data[4].timeframes.daily.current}hrs`;
  previousSelfCare.innerText = `${data[4].timeframes.daily.previous}hrs`;
}
function updateTimeWeekly(data) {
  currentWork.innerText = `${data[0].timeframes.weekly.current}hrs`;
  previousWork.innerText = `${data[0].timeframes.weekly.previous}hrs`;
  currentPlay.innerText = `${data[1].timeframes.weekly.current}hrs`;
  previousPlay.innerText = `${data[1].timeframes.weekly.previous}hrs`;
  currentStudy.innerText = `${data[2].timeframes.weekly.current}hrs`;
  previousStudy.innerText = `${data[2].timeframes.weekly.previous}hrs`;
  currentExercise.innerText = `${data[3].timeframes.weekly.current}hrs`;
  previousExercise.innerText = `${data[3].timeframes.weekly.previous}hrs`;
  currentSocial.innerText = `${data[4].timeframes.weekly.current}hrs`;
  previousSocial.innerText = `${data[4].timeframes.weekly.previous}hrs`;
  currentSelfCare.innerText = `${data[4].timeframes.weekly.current}hrs`;
  previousSelfCare.innerText = `${data[4].timeframes.weekly.previous}hrs`;
}
function updateTimeMonthly(data) {
  currentWork.innerText = `${data[0].timeframes.monthly.current}hrs`;
  previousWork.innerText = `${data[0].timeframes.monthly.previous}hrs`;
  currentPlay.innerText = `${data[1].timeframes.monthly.current}hrs`;
  previousPlay.innerText = `${data[1].timeframes.monthly.previous}hrs`;
  currentStudy.innerText = `${data[2].timeframes.monthly.current}hrs`;
  previousStudy.innerText = `${data[2].timeframes.monthly.previous}hrs`;
  currentExercise.innerText = `${data[3].timeframes.monthly.current}hrs`;
  previousExercise.innerText = `${data[3].timeframes.monthly.previous}hrs`;
  currentSocial.innerText = `${data[4].timeframes.monthly.current}hrs`;
  previousSocial.innerText = `${data[4].timeframes.monthly.previous}hrs`;
  currentSelfCare.innerText = `${data[4].timeframes.monthly.current}hrs`;
  previousSelfCare.innerText = `${data[4].timeframes.monthly.previous}hrs`;
}

fetchAPI();

// Event Listeners

dailyButton.addEventListener("click", () => {
  updateTimeDaily(jsonData);
});

weeklyButton.addEventListener("click", () => {
  updateTimeWeekly(jsonData);
});
monthlyButton.addEventListener("click", () => {
  updateTimeMonthly(jsonData);
});
