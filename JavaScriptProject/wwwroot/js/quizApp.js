const quizData = [
	{
		question: 'Best Football Manager SEGA game?',
		a: '2012',
		b: '2005',
		c: '2023',
		d: '2007',
		correct: 'b'
	},
	{
		question: 'Best programming language?',
		a: 'Go',
		b: 'C++',
		c: 'Java',
		d: 'All',
		correct: 'd'
	},
	{
		question: 'Best sci-fi Film?',
		a: 'Harry Potter',
		b: 'Lord Of the Rings',
		c: 'Breaking Bad',
		d: 'None of the above',
		correct: 'a'
	},
	{
		question: 'Best Entrepreneur?',
		a: 'Elon Musk',
		b: 'Nikola Tesla',
		c: 'Mark Zuckerberg',
		d: 'Jeff Bezos',
		correct: 'b'
	}
]
const answersEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {
	deselectAnswers();	
	const currentQuizData = quizData[currentQuiz];
	question.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getAnswer() {
	
	let answer = undefined;
	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			return answer = answerEl.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answersEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submit.addEventListener('click', () => {
	const answer = getAnswer();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
			currentQuiz++;
			currentQuiz < quizData.length ? loadQuiz() : quiz.innerHTML = `<h2>Correct answer:${score}/${quizData.length}</h2><button onclick="location.reload()">Reload</button>`;
		}
		else { currentQuiz++; currentQuiz < quizData.length ? loadQuiz() : quiz.innerHTML = `<h2>Correct answer:${score}/${quizData.length}</h2><button onclick="location.reload()">Reload</button>`; }
	}
	else {
		alert("Choose answer");
	}

});