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

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
	const currentQuizData = quizData[currentQuiz];
	question.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
	currentQuiz++;
}
