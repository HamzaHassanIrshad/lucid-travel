// Functions
function buildQuiz() {
	// Variable to store the HTML output
	const output = [];

	// For each question...
	myQuestions.forEach(
		(currentQuestion, questionNumber) => {

			// Variable to store the list of possible answers
			const answers = [];

			// and for each available answer...
			for (letter in currentQuestion.answers) {

				// ...add an HTML radio button
				answers.push(
					`<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
				);
			}

			// Add this question and its answers to the output
			output.push(
				`<div class="slide">
                        <div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join("")} </div>
                    </div>`
			);
		}
	);

	// Finally combine our output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join('');
}

function showResults() {
	// Keep track of user's answers
	var score = 0;
	var score_sheet = "";

	// Gather answer containers from our quiz
	const answerContainers = quizContainer.querySelectorAll('.answers');

	// For each question...
	myQuestions.forEach((currentQuestion, questionNumber) => {

		// Find selected answer
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		// If answer is correct
		if (userAnswer === currentQuestion.correctAnswer) {
			answerContainers[questionNumber].style.color = '#0fd449';
			score += 2;
		}
		// If answer is wrong or blank
		else {
			answerContainers[questionNumber].style.color = '#ff0000';
			score -= 1;
		}
	});

	// Show the total score
	score_sheet = "Your score is: " + score;
	resultsContainer.innerHTML = `${score_sheet}`;
	// Changing background color according to the obtained mark for the quiz
	if (score < 10) {
		document.getElementById("main_container").style.backgroundColor = "#540909";
	} else {
		document.getElementById("main_container").style.backgroundColor = "#065c20";
	}
}

// Countdown of 60 seconds for the quiz
document.addEventListener('DOMContentLoaded', () => {
	const timeLeftDisplay = document.querySelector('#time_left');
	const startBtn = document.querySelector('#start_countdown');
	const submitBtn = document.querySelector('#submit');
	const timerDisplay = document.querySelector('#timer');
	let timeLeft = 60;
	let timeTaken = 0;

	function countDown() {
		setInterval(function () {
			if (timeLeft < 1) {
				clearInterval(timeLeft = 1);
				showSlide(slides.length - 1);
				showResults();
			}
			timeLeftDisplay.innerHTML = timeLeft + " second(s) left";
			timeLeft -= 1;
			timeTaken = 60 - timeLeft;
		}, 1000);
	}
	startBtn.addEventListener('click', countDown);
	submitBtn.addEventListener('click', function () {
		timeLeft = 1;
		timerDisplay.innerHTML = "You took " + timeTaken + " seconds";

	});
});

function showSlide(n) {
	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;
	if (currentSlide === 0) {
		previousButton.style.display = 'none';
		startCountdown.style.display = 'inline-block';
	} else {
		previousButton.style.display = 'inline-block';
		startCountdown.style.display = 'none';
	}
	if (currentSlide === slides.length - 1) {
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	} else {
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	}
}

function showNextSlide() {
	showSlide(currentSlide + 1);
}

function showPreviousSlide() {
	showSlide(currentSlide - 1);
}

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}


// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startCountdown = document.getElementById('start_countdown');
const myQuestions = [{
		question: "1. What is known as the pearl of the Indian Ocean?",
		answers: {
			a: "Maldives",
			b: "Sri Lanka",
			c: "India",
			d: "Singapore"
		},
		correctAnswer: "b"
	},
	{
		question: "2. What is the most sacred mountain in Sri Lanka?",
		answers: {
			a: "Sigiriya",
			b: "Pidurutalagala",
			c: "Bible Rock",
			d: "Adam's Peak"
		},
		correctAnswer: "d"
	},
	{
		question: "3. Where is the temple of the tooth situated?",
		answers: {
			a: "Kandy",
			b: "Colombo",
			c: "Galle",
			d: "Trincomalee"
		},
		correctAnswer: "a"
	},
	{
		question: "4. What is the world's eighth wonder?",
		answers: {
			a: "The Great Wall of China",
			b: "Taj Mahal",
			c: "The Sigiriya Rock",
			d: "The Roman Colosseum"
		},
		correctAnswer: "c"
	},
	{
		question: "5. What is the currency used in Sri Lanka?",
		answers: {
			a: "Rupee",
			b: "Yen",
			c: "Baht",
			d: "Rupiah"
		},
		correctAnswer: "a"
	},
	{
		question: "6. What is the capital of gems in Sri Lanka?",
		answers: {
			a: "Kurunagala",
			b: "Dambulla",
			c: "Chilaw",
			d: "Ratnapura"
		},
		correctAnswer: "d"
	},
	{
		question: "7. What is the name of the longest river in Sri Lanka?",
		answers: {
			a: "Kalu Ganga",
			b: "Nilwala Ganga",
			c: "Mahawali Ganga",
			d: "Kalani Ganga"
		},
		correctAnswer: "c"
	},
	{
		question: "8. Which is the highest point in Sri Lanka?",
		answers: {
			a: "Adam's Peak",
			b: "Pidurutalagala",
			c: "Kirigalpotta",
			d: "Totapolakanda"
		},
		correctAnswer: "b"
	},
	{
		question: "9. What is the most famous sport played in Sri Lanka?",
		answers: {
			a: "Football",
			b: "Rugby",
			c: "Cricket",
			d: "Badminton"
		},
		correctAnswer: "c"
	},
	{
		question: "10. What is is the tallest waterfall in Sri Lanka?",
		answers: {
			a: "Bambarakanda Falls",
			b: "Diyaluma Falls",
			c: "Laxapana Falls",
			d: "Ramboda Falls"
		},
		correctAnswer: "a"
	},
];

// To start things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);