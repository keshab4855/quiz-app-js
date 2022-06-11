const question = document.getElementById("question");
const choices = Array.from(document.querySelector(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let quwestions = [
  {
    question: "What is 5 + 3?",
    choice1: "2",
    choice2: "3",
    choice3: "8",
    choice4: "10",
    answer: 3,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<javascript>",
    choice2: "<js>",
    choice3: "<scripting>",
    choice4: "<script>",
    answer: 4,
  },
  {
    question: "Which of the following is a server-side Java Script object?",
    choice1: "Function",
    choice2: "File",
    choice3: "FileUpload",
    choice4: "Date",
    answer: 2,
  },
  {
    question: "How does Java Script store dates in objects of Date type?",
    choice1: "The number of days since January 1st, 1900",
    choice2: "The number of seconds since January 1st, 1970",
    choice3: "The number of milliseconds since January 1st, 1970",
    choice4: "The number of picoseconds since January 1st, 1970",
    answer: 3,
  },
  {
    question:
      " Which of the following is used to capture all click events in a window?",
    choice1: "window.captureEvents(Event.CLICK);",
    choice2: "window.routeEvents(Event.CLICK );",
    choice3: "window.handleEvents (Event.CLICK);",
    choice4: "window.raiseEvents(Event.CLICK );",
    answer: 1,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;
