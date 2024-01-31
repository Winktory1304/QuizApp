//6 variablen 5 Strings 1 Number
let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
  },
  {
    "question": "Was bedeutet das Akronym 'CSS'?",
    "answer_1": "Creative Style Sheets",
    "answer_2": "Cascading Style Sheets",
    "answer_3": "Computer Style Sheets",
    "answer_4": "Colorful Style Sheets",
    "right_answer": 2
  },
  {
    "question": "Welches Protokoll wird hauptsächlich für die Übertragung von Webseiten verwendet?",
    "answer_1": "FTP",
    "answer_2": "HTTP",
    "answer_3": "SMTP",
    "answer_4": "TCP",
    "right_answer": 2
  },
  {
    "question": "Was ist ein 'Cookie' im Kontext des Internets?",
    "answer_1": "Ein kleines Stück Daten, das von Websites gespeichert wird",
    "answer_2": "Ein Passwort-Speicherprogramm",
    "answer_3": "Ein Virus",
    "answer_4": "Ein digitaler Währungscode",
    "right_answer": 1
  },
  {
    "question": "Was beschreibt 'JavaScript' am besten?",
    "answer_1": "Ein Schreibstil für Journalisten",
    "answer_2": "Eine Marke von Kaffee",
    "answer_3": "Ein Betriebssystem",
    "answer_4": "Eine Programmiersprache",
    "right_answer": 4
  },
  {
    "question": "Was ist eine IP-Adresse?",
    "answer_1": "Ein internationaler Passcode",
    "answer_2": "Eine persönliche Identifikationsnummer",
    "answer_3": "Eine Internet-Protokoll-Adresse",
    "answer_4": "Ein Zahlencode für Internet-Banking",
    "right_answer": 3
  },
  {
    "question": "Was ist ein 'Domain Name'?",
    "answer_1": "Ein Benutzername für E-Mail-Konten",
    "answer_2": "Der offizielle Name einer Website",
    "answer_3": "Ein Passwort-Sicherheitssystem",
    "answer_4": "Ein Typ von Software",
    "right_answer": 2
  }
];


let currentQuestion = 0;
let rightQuestion = 0;
let Audio_success = new Audio('./audio/success_sound.mp3');
let Audio_wrong = new Audio('./audio/wrong_sound.mp3');


function init() {
  document.getElementById('lengthOfQuestions').innerHTML = questions.length;
  showQuestion();
};


function showQuestion() {
  //Endscreen
  if (quizIsOver()) { //ist 7 größer gleich Array (7)
    showEndScreen()
    //Frage
  } else {
    progressbar();
    newQuestion();
  }
}


function newQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('actualQuestionPage').innerHTML = currentQuestion + 1;
  document.getElementById('questionText').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function progressbar() {
  let percent = (currentQuestion / questions.length) * 100;
  let percent2 = percent.toFixed();
  document.getElementById('progress-bar').innerHTML = `${percent2}%`;//Progressbar Text
  document.getElementById('progress-bar').style = `width: ${percent2}%`;//Progressbar Breite
}

function quizIsOver() {
  return currentQuestion >= questions.length;
 

}


function showEndScreen() {
  document.getElementById('endScreen').style = ""; // endscreen wird angezeigt da display none verschwindet
  document.getElementById('questionScreen').style = "display: none";
  document.getElementById('endscreen-max-pages').innerHTML = questions.length;
  document.getElementById('corret-answers').innerHTML = rightQuestion;
}

function answer(answerSelection) { //answerSelection wird durch den Button definiert
  let question = questions[currentQuestion]; //  questions[0] zB
  let numberOfAnswer = answerSelection.replace(/\D/g, ""); // alles was keine zahl ist wird durch "" ersetzt g steht für global, also dem ganzen string
  indexOfRightAnswer = `answer_${question['right_answer']}`
  if (numberOfAnswer == question['right_answer']) { // Vergleich 
    Audio_success.play();
    rightQuestion++;
    document.getElementById(answerSelection).parentNode.classList.add('bg-success'); // parentNode steht für Übergeordnetes Element
  } else {
    Audio_wrong.play();
    console.log('Falsch');
    document.getElementById(answerSelection).parentNode.classList.add('bg-danger');
    document.getElementById(indexOfRightAnswer).parentNode.classList.add('bg-success');

  }
  document.getElementById('next-question-button').disabled = false; // Button wird freigeschaltet
}


function nextQuestion() {
  currentQuestion++; //um 1 erhöt
  document.getElementById('next-question-button').disabled = true; // Button wird gesperrt
  resetAnswerButtons();
  init();
}

//alle Felder zurücksetzen 
function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restart() {
  currentQuestion = 0;
  rightQuestion = 0;
  init();
  document.getElementById('questionScreen').style = ""; //Endscreen wird vorborgen
  document.getElementById('endScreen').style = "display: none"; // Questionscreen wieder da
}