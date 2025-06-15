// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");

    if (!selectedOption) {
        // If no option is selected, display an error message
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Green for correct answer
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Red for incorrect answer
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
