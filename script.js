var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");

startButton.addEventListener("click", function () {
    main.innerHTML = "";
    startQuiz();
});

var secondsLeft = 76;

function startQuiz() {
    startTimer();
}

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;


        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }

    }, 1000);
}