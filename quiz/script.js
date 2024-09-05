const questions = [
    {
        question: "1) A Ditadura Militar no Chile começou em 1973?",
        answer: true,
        explanation: "A informação é verdadeira."
    },
    {
        question: "2) O líder militar responsável pelo golpe que instaurou a ditadura no Chile foi o general Augusto Pinochet?",
        answer: true,
        explanation: "A informação é verdadeira."
    },
    {
        question: "3) Um dos motivos que levaram ao golpe militar foi que o governo de Salvador Allende era de extrema direita.",
        answer: false,
        explanation: "O governo de Salvador Allende era baseado no socialismo."
    },
    {
        question: "4) A ditadura no Chile foi pacifica e não houve violência.",
        answer: false,
        explanation: "Durante a ditadura, houve perseguição implacável aos opositores dela, com milhares de mortes e torturas."
    },
    {
        question: "5) A ditudura de Augusto Pinochet no Chile terminou em 1980?",
        answer: false,
        explanation: "A ditudura no Chile terminou em 1988. (1973 - 1998)"
    },
    {
        question: "6) A ditadura militar na Argentina, que tirou que depôs a presidenta Isabelita Perón, ocorreu em 1976.",
        answer: true,
        explanation: "A informação é verdadeira."
    },
    {
        question: "7) O regime militar na Argentina foi pacifico.",
        answer: false,
        explanation: "Houve repressão violenta, com sequestros, torturas e assassinatos, resultando em mais de 30 mil mortos."
    },
    {
        question: "8) Apesar da desindustrialização, centralização do poder e violência, as dividas externas e a inflação na Argentina diminuiram.",
        answer: false,
        explanation: "As dividas externas e a inflação cresceram."
    },
    {
        question: "9) A derrota na Guerra das Malvinas em 1982 acelerou o fim do regime na Argentina?",
        answer: true,
        explanation: "A informação é verdadeira."
    },
    {
        question: "10) O fim do regime aconteceu oficialmente em 1980",
        answer: false,
        explanation: "Ela terminou oficialmente em 1983, um ano após a derrota na Guerra das Malvinas."
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('quizQuestion').textContent = currentQuestion.question;
    document.getElementById('quizAnswer').textContent = '';
    document.getElementById('trueButton').disabled = false;
    document.getElementById('falseButton').disabled = false;
    document.getElementById('nextQuestion').style.display = 'none';
    if(currentQuestionIndex == questions.length - 1){
        document.getElementById('nextQuestion').innerText = 'Terminar';
    }
}

function checkAnswer(isTrue) {
    document.getElementById('trueButton').disabled = true;
    document.getElementById('falseButton').disabled = true;
    const answer = document.getElementById('quizAnswer');
    const currentQuestion = questions[currentQuestionIndex];
    if (isTrue === currentQuestion.answer) {
        answer.textContent = `ACERTOU! ${currentQuestion.explanation}`;
        correctAnswers++;
    } else {
        answer.textContent = `Você errou. ${currentQuestion.explanation}`;
    }
    document.getElementById('nextQuestion').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');
    const quizResult = document.getElementById('quizResult');
    const quizPerguntas = document.getElementById('perguntas');

    resultText.textContent = `Você acertou ${correctAnswers}/${questions.length}`;

    if (correctAnswers < 5) {
        resultImage.src = '../pics/psyducktriste.gif';
    } else if (correctAnswers <= 7) {
        resultImage.src = '../pics/psyduckneutro.gif';
    } else {
        resultImage.src = '../pics/psyduckfeliz.gif';
    }

    quizPerguntas.style.display = 'none';
    quizResult.style.display = 'block';
}

// Carrega a primeira pergunta ao iniciar
window.onload = loadQuestion;