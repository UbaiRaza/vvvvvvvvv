// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFDzU5OwA_ncbctdQNGgJexvUGZ8NOwY",
  authDomain: "quizappp-27e5b.firebaseapp.com",
  projectId: "quizappp-27e5b",
  storageBucket: "quizappp-27e5b.appspot.com",
  messagingSenderId: "94535894428",
  appId: "1:94535894428:web:fe815b31660e7028a07459",
  measurementId: "G-YHVTZ5G4PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



var questions = [
  {
    question: "HTML Stands for ______________",
    options: [
      "hypher and text Markup Language",
      "Home toll Markup language",
      "Hypertext Markup Language",
      "programing language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: [
      "Microsoft",
      "The World Wide Web Consortium",
      "Google",
      "Mozilla",
    ],
    correctAnswer: "Microsoft",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["head", "h6", "h1", "heading"],
    correctAnswer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["lb", "/br", "br;", "break"],
    correctAnswer: "/br",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "background>yellow</background",
      "body bg= yellow",
      "Structured Query Language",
      "body style=background-color:yellow",
    ],
    correctAnswer: "body style=background-color:yellow",
  },
  {
    question: "Choose the correct HTML element to define important text",
    options: ["strong", "important", "i", "b"],
    correctAnswer: "strong",
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    options: ["i", "em", "italic", "none"],
    correctAnswer: "em",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["/", "^", "*", "<"],
    correctAnswer: "/",
  },
  {
    question:
      "Inline elements are normally displayed without starting a new line.",
    options: ["False", "True"],
    correctAnswer: "True",
  },
  {
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["top", "section", "head", "header"],
    correctAnswer: "header",
  },
];
var cerrentQuestion = document.getElementById("cerrentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var question = document.getElementById("question");
var answerParent = document.getElementById("answerParent");
var indexNum = 0;
var score = 0;
function renderQuestion() {
  cerrentQuestion.innerHTML = indexNum + 1;
  totalQuestion.innerHTML = questions.length;
  var obj = questions[indexNum];
  question.innerHTML = obj.question;
  answerParent.innerHTML = "";
  for (var i = 0; i < obj.options.length; i++) {
    answerParent.innerHTML += `<div class="py-2">
        <button onclick="checkQuestion('${obj.options[i]}', '${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100 hover">
            ${obj.options[i]}
        </button>
</div>`;
  }
}
renderQuestion();
function nextQuestion() {
  indexNum++;
  renderQuestion();
}
function checkQuestion(a, b) {
  if (a == b) {
    score++;
    console.log(score);
  }
  nextQuestion;
}
