const questions = [
    {
        question: "Kurš bija pirmais Latvijas prezidents?",
        answers: ["Jānis Čakste", "Gustavs Zemgals", "Alberts Kviesis", "Kārlis Ulmanis"],
        correct: 0
    },
    {
        question: "Kurā gadā Latvija ieguva neatkarību?",
        answers: ["1918", "1921", "1939", "1940"],
        correct: 0
    },
    {
        question: "Kurš bija pirmais cilvēks kosmosā?",
        answers: ["Jurijs Gagarins", "Neils Ārmstrongs", "Alans Šepards", "Valentīna Tereškova"],
        correct: 0
    },
    {
        question: "Kurā gadā notika Rīgas aplenkums?",
        answers: ["1710", "1700", "1721", "1790"],
        correct: 0
    },
    {
        question: "Kurā gadā Latvija pievienojās Eiropas Savienībai?",
        answers: ["2000", "2002", "2004", "2006"],
        correct: 2
    },
    {
        question: "Kas bija Trešās atmodas galvenais notikums?",
        answers: ["Atmodas sākums", "Baltijas ceļš", "Latvijas PSR izveide", "Padomju okupācija"],
        correct: 1
    },
    {
        question: "Kurš bija pirmais ASV prezidents?",
        answers: ["Tomass Džefersons", "Džordžs Vašingtons", "Abrahams Linkolns", "Džons Adams"],
        correct: 1
    },
    {
        question: "Kurš vadīja nacistisko Vāciju?",
        answers: ["Adolf Hitlers", "Jozefs Staļins", "Vinstons Čērčils", "Džons Kenedijs"],
        correct: 0
    },
    {
        question: "Kurš bija pirmais cilvēks, kas nolidoja virs Atlantijas okeāna solo?",
        answers: ["Čārlzs Lindberghs", "Amēlija Erhārta", "Vilems Van der Zeijs", "Edvards Rokenbēkers"],
        correct: 0
    },
    {
        question: "Kas ir Romas impērijas dibinātājs?",
        answers: ["Augusts", "Rēmuss", "Jūlijs Cēzars", "Romuls"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").innerText = question.question;
        const answerButtons = document.querySelectorAll(".answer-btn");
        answerButtons.forEach((btn, index) => {
            btn.innerText = question.answers[index];
        });
    } else {
        showResults();
    }
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("correct-answers").innerText = correctAnswers;
}
