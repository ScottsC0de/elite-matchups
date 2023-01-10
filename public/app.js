var btnOne = document.getElementById('btn-one');
var btnTwo = document.getElementById('btn-two');
var scoreOne = document.getElementById('score-one');
var scoreTwo = document.getElementById('score-two');

let scoreboardOne = 0;
let scoreboardTwo = 0;

// 1 vote max
const vote = () => {
    btnOne.disabled = true;
    btnTwo.disabled = true;
};

// add 1 score to content 1
const scoreOneFunction = () => {
    scoreboardOne += 1;
    scoreOne.textContent = scoreboardOne;
};

// add 1 score to content 2
const scoreTwoFunction = () => {
    scoreboardTwo += 1;
    scoreTwo.textContent = scoreboardTwo;
};

// onclick disable buttons, add 1 to score
btnOne.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreOneFunction();
    updateLiveScore();

    console.log('test');
});

btnTwo.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreTwoFunction();
    updateLiveScore();

    console.log('test');
});

const updateLiveScore = () => {

};

const displayLiveScore = () => {

};

document.addEventListener('load', function (e) {
    displayLiveScore();
});

