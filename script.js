var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");


startButton.addEventListener("click", function () {
    main.innerHTML = "";
    startQuiz();
});

var secondsLeft = 75;

function startQuiz() {
    startTimer();
    createQuiz();
}

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
}

function createQuiz() {
    var sectionEl = document.createElement("section");
    document.body.children[1].appendChild(sectionEl);
    var figureEl = document.createElement("figure");
    document.body.children[1].children[0].appendChild(figureEl);
    var h1 = document.createElement("h1");
    document.body.children[1].children[0].children[0].appendChild(h1);
    var ol = document.createElement("ol");
    document.body.children[1].children[0].children[0].appendChild(ol);



    return newQuestion();
}

function newQuestion() {

    var questions = ["What is 'true'?"];
    var h1 = document.querySelector("h1");
    h1.textContent = questions[0];
    var answer = ["boolean", "string", "variable", "tag"]

    for (let i = 0; i < 4; i++) {
        var li = document.createElement("li");
        document.body.children[1].children[0].children[0].children[1].appendChild(li);
        li.textContent = answer[i];

    }


}

