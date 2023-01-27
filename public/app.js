var btnOne = document.getElementById('btn-one');
var btnTwo = document.getElementById('btn-two');
var btnThree = document.getElementById('btn-three');
var scoreOne = document.getElementById('score-one');
var scoreTwo = document.getElementById('score-two');
var scoreThree = document.getElementById('score-three');
// var clearBtn = document.getElementById('clear-btn');

let scoreboardOne = 0;
let scoreboardTwo = 0;
let scoreboardThree = 0;

// var canVote = true;

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
            scoreThree.textContent = data.scoreThree;

            scoreboardOne = data.scoreOne;
            scoreboardTwo = data.scoreTwo;
            scoreboardThree = data.scoreThree;
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
const voted = () => {
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
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

const scoreThreeFunction = () => {
    scoreboardThree += 1;
    scoreThree.textContent = scoreboardThree;
};

// onclick disable buttons, add 1 to score
btnOne.addEventListener('click', function (e) {
    // e.preventDefault();
    voted();
    scoreOneFunction();
    updateLiveScore('scoreOne');

    canVote = false;
    localStorage.setItem('omg', 'yay');
});

btnTwo.addEventListener('click', function (e) {
    // e.preventDefault();
    voted();
    scoreTwoFunction();
    updateLiveScore('scoreTwo');

    canVote = false;
    localStorage.setItem('omg', 'yay');
});

btnThree.addEventListener('click', function (e) {
    // e.preventDefault();
    voted();
    scoreThreeFunction();
    updateLiveScore('scoreThree');

    canVote = false;
    localStorage.setItem('omg', 'yay');
});

window.addEventListener('load', function (e) {
    displayLiveScore();
    // clearStorage();
    if (localStorage.getItem('omg', 'yay')) {
        voted();
    }
});

// clearBtn.addEventListener("click", function (e) {
//     localStorage.clear();
// });

// reset now!