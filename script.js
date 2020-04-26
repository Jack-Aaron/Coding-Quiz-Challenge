var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");

startButton.addEventListener("click", function() {
    main.innerHTML = "";
    // startQuiz();
});

function startTimer() {
  
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }

  function renderTime() {
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
  
    if (secondsElapsed >= totalSeconds) {
      if (status === "Working") {
        alert("Time for a break!");
      } else {
        alert("Time to get back to work!");
      }
  
      stopTimer();
    }
  }