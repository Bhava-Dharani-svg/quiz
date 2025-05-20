const questions = [
  {
    question: "who was the comedian in the movie UNAKKUM ENAKKUM",
    answers: [
      { text: "santhanam", correct: true },
      { text: "suri", correct: false },
      { text: "vadivelu", correct: false },
      { text: "sathish", correct: false }
    ]
  },
  {
    question: "The song INNUM KONJA NERAM IRUNTHA THAN ENNA was sung by",
    answers: [
      { text: "srinivas", correct: false },
      { text: "Vijay prakash" ,correct: true },
      { text: "Shankar mahadevan", correct: false },
      { text: "Karthik", correct: false }
    ]
  },
  {
      question:"In which movie vadivelu played the famous character VANDU MURUGAN",
      answers:[
      {text:"Marudhamalai",correct:false},
      {text:"Ellam avan seyal",correct:true},
      {text:"Thirumalai",correct:false},
      {text:"kaaka kaaka",correct:false}
      ]
  },
  {
    question:"Who is the youngest music composer joining the film industry at the age of 16",
    answers:[
    {text:"Harris Jeyaraj",correct:false},
    {text:"A.R.Rahman",correct:false},
    {text:"G.V.Prakash",correct:false},
    {text:"Yuvan shankar raja",correct:true}
    ]
  },
  {
    question:"Who was the third generation of the actor sivaji ganesan",
     answers:[
    {text:"dhruv vikram",correct:false},
    {text:"vikram prabhu",correct:true},
    {text:"Atharva",correct:false},
    {text:"Aathi",correct:false}
   ]
  }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }, 1500);
}


function showScore() {
  questionContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreText.innerText = `${score} / ${questions.length}`;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.style.display="none";

startQuiz();