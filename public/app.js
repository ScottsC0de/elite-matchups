var btnOne = document.getElementById('btn-one');
var btnTwo = document.getElementById('btn-two');
// var btnThree = document.getElementById('btn-three');
// var btnFour = document.getElementById('btn-four');
var scoreOne = document.getElementById('score-one');
var scoreTwo = document.getElementById('score-two');
// var scoreThree = document.getElementById('score-three');
// var scoreFour = document.getElementById('score-four');

let scoreboardOne = 0;
let scoreboardTwo = 0;
// let scoreboardThree = 0;
// let scoreboardFour = 0;

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
            // scoreThree.textContent = data.scoreThree;
            // scoreFour.textContent = data.scoreFour;

            scoreboardOne = data.scoreOne;
            scoreboardTwo = data.scoreTwo;
            // scoreboardThree = data.scoreThree;
            // scoreboardFour = data.scoreFour;
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
    // btnThree.disabled = true;
    // btnFour.disabled = true;
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

// const scoreThreeFunction = () => {
//     scoreboardThree += 1;
//     scoreThree.textContent = scoreboardThree;
// };

// const scoreFourFunction = () => {
//     scoreboardFour += 1;
//     scoreFour.textContent = scoreboardFour;
// };

// onclick disable buttons, add 1 to score
btnOne.addEventListener('click', function (e) {
    voted();
    scoreOneFunction();
    updateLiveScore('scoreOne');
    localStorage.setItem('please', 'votee');
});

btnTwo.addEventListener('click', function (e) {
    voted();
    scoreTwoFunction();
    updateLiveScore('scoreTwo');
    localStorage.setItem('please', 'votee');
});

// btnThree.addEventListener('click', function (e) {
//     voted();
//     scoreThreeFunction();
//     updateLiveScore('scoreThree');
//     localStorage.setItem('please', 'votee');
// });

// btnFour.addEventListener('click', function (e) {
//     voted();
//     scoreFourFunction();
//     updateLiveScore('scoreFour');
//     localStorage.setItem('please', 'votee');
// });

window.addEventListener('load', function (e) {
    displayLiveScore();

    if (localStorage.getItem('please', 'votee')) {
        voted();
    }
});