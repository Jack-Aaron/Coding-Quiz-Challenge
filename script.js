// define dynamic parts of the page
var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");

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

// starts the quiz
function startQuiz() {
    startTimer();
    createQuiz();
}

// simple interval for Timer
function startTimer() {
    secondsEl.textContent = secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;
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
    ol.setAttribute("style", "padding-top:4em;");
    // starts at the first Question
    askQuestion(0);
} // end function

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
} // end function


function checkAnswer(questionNumber) {
    // makes buttons out of list items
    var olEl = document.querySelector("ol");
    olEl.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        counter++;
        console.log("Counter: " + counter);
        // checks Answer
        var answerValue = event.target.value;
        if (answerValue === "true") { /* adds a point to the score */ score++; }
        else {  /* deducts five seconds */ secondsLeft -= 5; }
        console.log("Score: " + score);
        // adds one to questionNumber, shifting the array to prepare for next Question
        questionNumber++;
        if (counter < 10) { askQuestion(questionNumber); }
        else { endQuiz(); }
    });
};

function endQuiz();

// this controls the start button
startButton.addEventListener("click", function () {
    main.innerHTML = "";
    startQuiz();
});



//  if (i === answers[questionNumber][4]) {
//   var answerIsCorrect = true;
//  var correctAnswer = answers[questionNumber][4];
// }
/*
var answerButtonEl = document.querySelector("#answer").textContent;
console.log(answerButtonEl);


answerButtonEl.addEventListener("click", function (event) {
   var answer = event.target.textContent;
   console.log(answer);

   if (answer === answers[answers[4]]) {
         alert("correct!");
     }
});


//  console.log(correctAnswer);

// if (answers[questionNumber][4] === answers.indexOf(answers[questionNumber])) {
//   score = + 1;
//  console.log(score);
55

     //  }

//    });

 //  questionNumber++;



*/