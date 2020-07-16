# Coding Quiz Challenge

### Overview

This coding quiz stylistically emulates the [Git BASH](https://gitforwindows.org/) command line application. It will ask the player 10 questions about coding. After you answer a question, it will load the next question. If you answer a question correctly or incorrectly, it will tell you the result. If your answer a question correctly, your Score increases by 1. If you answer a question incorrectly, you lose 5 Seconds from the Timer. Your Score will equal the # of Questions answered correctly plus remaining time in Seconds. Your Score will be displayed at the end. If you achieve a high score, you may enter your initials, which are displayed in order of high score for as long as they are kept in Local Storage.

![Demo of Coding Quiz Challenge](demo.gif?raw=true)

### Development Process

As this project was to be created entirely using dynamic JavaScript, it was a challenge getting everything to look right especially across different devices. It took a lot of experimentation to figure out combinations of HTML, CSS and logic to be responsive in relation to the content length of the question and answer pairs.

Wanting to pay homage to the GitBash color scheme, I took screenshots and used dropper tools to pinpoint the exact colors to use in the application's theme.

Keeping track of scope across different functions of the application was important to finishing this project.

### Technologies Used
* HTML/CSS
* Responsive Web Design Media Queries
* Javascript ES5
* Bootstrap
* [Popper.js](https://popper.js.org/)
* jQuery
* JSON

### Links
* [Application](https://jack-aaron.github.io/Coding-Quiz-Challenge/)

### Future Improvements
* Put real content in the latter questions
* Have the timer remain at the count of when the quiz was finished instead of resetting to zero
* Fix positining issues with Popper.js
