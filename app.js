var albumOneBtn = document.getElementById('album-one-btn');
var albumTwoBtn = document.getElementById('album-two-btn');
var scoreboard = document.getElementById('scoreboard');
var albumOneScoreDisplay = document.getElementById('album-one-score');
var albumTwoScoreDisplay = document.getElementById('album-two-score');

let albumOneScore = 0;
let albumTwoScore = 0;

// 1 vote max
const vote = () => {
    albumOneBtn.disabled = true;
    albumTwoBtn.disabled = true;
};

// add 1 score to album 1
const scoreOne = () => {
    albumOneScore += 1;
    albumOneScoreDisplay.textContent = albumOneScore;
};

// add 1 score to album 2
const scoreTwo = () => {
    albumTwoScore += 1;
    albumTwoScoreDisplay.textContent = albumTwoScore;
};

// onclick disable buttons, add 1 to score
albumOneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreOne();

    console.log('test');
});

albumTwoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreTwo();

    console.log('test');
});
