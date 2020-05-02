// define dynamic parts of the page
var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var seconds = document.querySelector("#seconds");
var header = document.querySelector("header");

// put this var here to test something, but probably can delete it after?
var counter = 0;

// reset quiz for user
var score = 0;
// this is the amount of time for player
var secondsLeft = 75;

// put all questions and answers into array
var questions = ["The value \"true\" is an example of what type of variable?",
    "Which of the following methods could be called to change a font-size of the content of an element?",
    "A user will be prompted if Javascript code runs which of the following methods:",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
    "Question 9",
    "Question 10",
    "You got through all the questions. There is no more quiz."
];
var answers = [
    ["Boolean ", "Number ", "String ", "Tag ", 0],
    [".fontSize()", ".appendChild()", ".setAttribute()", ".querySelector()", 2],
    ["console.log()", "alert()", ".getElementByID()", "confirm();", 3],
    ["Correct Answer", "Wrong Answer", "Wrong Answer", "Wrong Answer", 0],
    ["Wrong Answer", "Wrong Answer", "Correct Answer", "Wrong Answer", 2],
    ["Wrong Answer", "Wrong Answer", "Wrong Answer", "Correct Answer", 3],
    ["Wrong Answer", "Wrong Answer", "Wrong Answer", "Correct Answer", 3],
    ["Wrong Answer", "Correct Answer", "Wrong Answer", "Wrong Answer", 1],
    ["Wrong Answer", "Correct Answer", "Wrong Answer", "Wrong Answer", 1],
    ["Wrong Answer", "Wrong Answer", "Correct Answer", "Wrong Answer", 2],
    ["nothing", "blank", "nada", "empty", 0],
];

// set up local storage
var highScores;
if (localStorage.highScores === undefined) {
    highScores = [];
} else {
    highScores = JSON.parse(localStorage.highScores);
}

// starts the quiz
function startQuiz() {
    startTimer();
    createQuiz();
}

// simple interval for Timer
function startTimer() {
    seconds.textContent = secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        seconds.textContent = secondsLeft;
        // when timer reaches 0
        if (secondsLeft === 0) { clearInterval(timerInterval); /* sendMessage(); */ }
    }, 1000);
    return secondsLeft;
}

// this function creates the structure of the page controlling the quiz
function createQuiz() {
    var sectionEl = document.createElement("section"); // section
    document.body.children[1].appendChild(sectionEl);
    sectionEl.setAttribute("class", "container");
    var figureEl = document.createElement("figure"); // figure
    document.body.children[1].children[0].appendChild(figureEl);
    figureEl.setAttribute("class", "container");
    var h1 = document.createElement("h1"); // h1
    document.body.children[1].children[0].children[0].appendChild(h1);
    var ol = document.createElement("ol"); // ordered list
    document.body.children[1].children[0].children[0].appendChild(ol);
    ol.setAttribute("style", "padding-top:5vh;");
    var h4 = document.createElement("h4"); //h4 (Answer results)
    document.body.children[1].children[0].children[0].appendChild(h4);

    // starts at the first Question
    askQuestion(0);
}

// this function feeds the information of each Question into the page structure
function askQuestion(questionNumber) {
    // this places the Question text into the Question area of the page
    var h1 = document.querySelector("h1");
    h1.textContent = ""; // clears the previous Question
    h1.textContent = questions[questionNumber];
    // clear all previous Answers
    var ol = document.querySelector("ol");
    ol.innerHTML = "";
    // for each Answer, let's display them
    for (let i = 0; i < 4; i++) { // there are 4 Answers
        // add a list item
        var li = document.createElement("li");
        document.body.children[1].children[0].children[0].children[1].appendChild(li);
        // find a "button"
        var answerButton = document.createElement("button")
        // ID the button and give style
        answerButton.setAttribute("id", "answer");
        answerButton.setAttribute("style", "padding:1em;width:100%");
        // put the Answer text in the button
        thisAnswer = answers[questionNumber][i];
        answerButton.textContent = thisAnswer;
        // answerKey is the index of the correct Answer, always found in slot 4
        var answerKey = answers[questionNumber][4];
        rightAnswer = answers[questionNumber][answerKey];
        // correct Answer will be labeled true
        if (thisAnswer === rightAnswer) { answerButton.value = true; }
        // put the whole button in the site
        document.body.children[1].children[0].children[0].children[1].children[i].appendChild(answerButton);
    } // end for loop

    checkAnswer(questionNumber);
}

function checkAnswer(questionNumber) {
    // makes buttons out of list items
    var ol = document.querySelector("ol");
    ol.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        // checks Answer
        var answerValue = event.target.value;
        if (answerValue === "true") {
            // adds a point to the score
            score++;
            // creates and fills a heading with Answer Result
            var h4 = document.querySelector("h4");
            h4.setAttribute("style", "text-align:center;color:rgb(19,161,14);");
            h4.textContent = "";
            h4.textContent = "Correct!";
        }
        else {
            // deducts five seconds
            secondsLeft -= 5;
            var h4 = document.querySelector("h4");
            h4.setAttribute("style", "text-align:center;color:rgb(136, 23, 152);")
            h4.textContent = "";
            h4.textContent = "Incorrect!";
        }
        // adds one to questionNumber, shifting the array to prepare for next Question
        questionNumber++;
        // stops 
        if (questionNumber < 10) { askQuestion(questionNumber); }
        else { finishQuiz(); }
    });
};

function finishQuiz() {
    var figure = document.querySelector("figure");
    figure.innerHTML = "";
    score += secondsLeft;
    secondsLeft = 1;
    displayScore();
};


function displayScore() {
    // move main down more towards center of screen
    var main = document.querySelector("main");
    // create the Your Score heading
    var h1 = document.createElement("h1");
    document.body.children[1].children[0].children[0].appendChild(h1);
    h1.innerHTML = "";
    h1.setAttribute("style", "text-align:center;font-size:2em;color:rgb(19,161,14)")
    h1.textContent = "YOUR SCORE";
    // create the heading that diplsays the score
    var h1 = document.createElement("h1");
    document.body.children[1].children[0].children[0].appendChild(h1);
    h1.innerHTML = "";
    h1.setAttribute("style", "text-align:center;font-size:2em;color:rgb(193,156,0)")
    h1.textContent = score;
    return checkScore(score);
}

function checkScore(score) {
    if (highScores.length > 0 && score > highScores[highScores.length - 1][1] || highScores.length === 0) {
        // run next function
        highScore(score);
    }
}

function highScore(score) {
    // create heading for annoucement
    var h4 = document.createElement("h4");
    h4.innerHTML = "";
    h4.setAttribute("style", "text-align:center;font-size:4em;margin-top:1em;color:rgb(19,161,14)")
    h4.textContent = "You got a new high score!";
    document.body.children[1].children[0].children[0].appendChild(h4);
    // ask for initials...
    var h5 = document.createElement("h5");
    h5.innerHTML = "";
    h5.setAttribute("style", "text-align:center;font-size:2em;margin-top:1em;color:rgb(19,161,14)")
    h5.textContent = "Enter Your Initials:";
    document.body.children[1].children[0].children[0].appendChild(h5);
    // need user input for initials
    getInitials();

    function getInitials() {
        var initials = document.createElement("input"); // set up the field
        initials.innerHTML = "";
        initials.setAttribute("autofocus", "true")
        initials.setAttribute("class", "container");
        initials.setAttribute("maxlength", "3"); // this limits to initials
        initials.setAttribute("type", "text");
        initials.setAttribute("name", "fname");
        initials.setAttribute("style", "line-height:1em;text-transform:uppercase;width:4em;font-size:4em;text-align:center;align-items:center;margin-top:1em;color:rgb(242,242,242);background-color:transparent;border:none;");
        document.body.children[1].children[0].children[0].appendChild(initials); // create

        // var initialsButton = document.createElement("button"); // submit button
        //  initialsButton.innerHTML = "SUBMIT";
        // document.body.children[1].children[0].children[0].appendChild(initialsButton);

        // this event submits initials
        initials.addEventListener("input", function () {

        
            var scoreSubmission = initials.value;

            if (scoreSubmission.length === 3) {
            score = [scoreSubmission, score];
            console.log(score);
            highScores.push(score);
            storeScore(highScores);
        }

        });
   

        // moderate the input
        //    checkInitials(initials.textContent);
    }

    // function checkInitials(initials) {

    //   if (initials.length === 3) {
    //     highScores[highScores.length].initials = initials;
    //      console.log(initials);
    //   }

    // }
}

// add the score to the high scores list! woohoo!



function storeScore(highScores) {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// this controls the start button
startButton.addEventListener("click", function () {
    main.innerHTML = "";
    // correctly spaces new divs
    main.style = "margin-top:-4em;"
    startQuiz();
});