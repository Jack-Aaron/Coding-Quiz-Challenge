// define dynamic parts of the page
var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");

// reset quiz for user
var score = 0;
questionNumber = 0;
// this is the amount of time for player
var secondsLeft = 75;

// put all questions and answers into array
var questions = ["The value \"true\" is an example of what type of variable?", "Which of the following methods could be called to change a font-size of the content of an element?", "A user will be prompted if Javascript code runs which of the following methods:"];
var answers = [["Boolean ", "Number ", "String ", "Tag ", 0], [], []];

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

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }

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

    // cycles questions and answers
    askQuestion();
} // end function

// this function feeds the information of each question into the page structure
function askQuestion() {

    // this places the Question text into the Question area of the page
    var h1 = document.querySelector("h1");
    h1.textContent = ""; // clears the previous question
    h1.textContent = questions[questionNumber];

    for (let i = 0; i < 4; i++) { // there are 4 answers
        // add a list item
        var li = document.createElement("li");
        document.body.children[1].children[0].children[0].children[1].appendChild(li);
        // find a "button"
        var answerButton = document.createElement("button")
        // id the button and give style
        answerButton.setAttribute("id", "answer");
        answerButton.setAttribute("style", "padding:1em;width:100%");
        // put the answer text in the button
        answerButton.textContent = answers[questionNumber][i];
        // put the whole button in the site
        document.body.children[1].children[0].children[0].children[1].children[i].appendChild(answerButton);

    } // end for loop
    checkAnswer();

    function checkAnswer() {
        // makes buttons out of list items
        var olEl = document.querySelector("ol");

        olEl.addEventListener("click", function (event) {
            // stores content of answer
            var answerContent = event.target.textContent;
            console.log(answerContent);

            // trying to check answer..
        });
    };
} // function

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