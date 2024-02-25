// Sample question data
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    }
];

// Index to keep track of current question
let currentQuestionIndex = 0;

// Function to display the current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionDivs = document.querySelectorAll(".q");
    for (let i = 0; i < optionDivs.length; i++) {
        optionDivs[i].textContent = currentQuestion.options[i];
    }
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption.textContent === currentQuestion.correctAnswer) {
        alert("Correct answer!");
    } else {
        alert("Incorrect answer!");
    }
    // Move to the next question
    currentQuestionIndex++;
    // Check if all questions have been answered
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz finished!");
        // You can do something else when the quiz is finished
    }
}

// Event listeners for option divs
const optionDivs = document.querySelectorAll(".q");
optionDivs.forEach(optionDiv => {
    optionDiv.addEventListener("click", () => {
        checkAnswer(optionDiv);
    });
});

// Display the first question initially
displayQuestion();
