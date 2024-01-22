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

function init(){
  document.getElementById('lengthOfQuestions').innerHTML = questions.length;
showQuestion();
};


function showQuestion(){
let question = questions[currentQuestion];
document.getElementById('questionText').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML = question['answer_1'];
document.getElementById('answer_2').innerHTML = question['answer_2'];
document.getElementById('answer_3').innerHTML = question['answer_3'];
document.getElementById('answer_4').innerHTML = question['answer_4'];
}
