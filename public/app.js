var btnOne = document.getElementById('btn-one');
var btnTwo = document.getElementById('btn-two');
var scoreOne = document.getElementById('score-one');
var scoreTwo = document.getElementById('score-two');
var clearBtn = document.getElementById('clear-btn');

let scoreboardOne = 0;
let scoreboardTwo = 0;

// get route
const displayLiveScore = () => {
    fetch('/matchup/score', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => { // or response

            console.log(data);
            // console.log(response)
            // const { data } = response;

            scoreOne.textContent = data.scoreOne;
            scoreTwo.textContent = data.scoreTwo;

            scoreboardOne = data.scoreOne;
            scoreboardTwo = data.scoreTwo;
        });
};

// put or post route
const updateLiveScore = (score) => {
    fetch('/matchup/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            score // shorthand set a key called score with value set to variable score
        }),
    });
};

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
    updateLiveScore('scoreOne');

    localStorage.setItem('hello', 'world');

    // console.log('test');
});

btnTwo.addEventListener('click', function (e) {
    e.preventDefault();
    vote();
    scoreTwoFunction();
    updateLiveScore('scoreTwo');

    localStorage.setItem('hello', 'world');

    // console.log('test');
});

window.addEventListener('load', function (e) {
    displayLiveScore();

    if (localStorage.getItem('hello', 'world')) {
        vote();
    }

});

clearBtn.addEventListener("click", function (e) {
    localStorage.clear();
});