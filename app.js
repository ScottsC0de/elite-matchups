var albumOneBtn = document.getElementById('album-one-btn');
var albumTwoBtn = document.getElementById('album-two-btn');
var scoreboard = document.getElementById('scoreboard');

var albumOneScore = 0;
var albumTwoScore = 0;

// 1 vote max
const vote = () => {
    albumOneBtn.disabled = true;
    albumTwoBtn.disabled = true;
};

// add 1 score to album 1
const scoreOne = () => {

};

// add 1 score to album 2
const scoreTwo = () => {

};

// onclick disable buttons, add 1 to score
albumOneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreOne();
});

albumTwoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreTwo();
});
