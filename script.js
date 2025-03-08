// Quiz questions and answers
const quizData = [
    {
       question: 'What does the term "Full Stack Development" refer to?',
       options: [
           "Development that involves stack data structures",
           "Development that involves front-end and back-end programming",
           "Development that involves back-end programming",
           "None of above"
       ],
       answer: "Development that involves front-end and back-end programming"
    },
    {
       question: "CRUD stands for?",
       options: [
           "Create, Read, Upload, Delete",
           "Create, Read, Upgrade, Deploy",
           "Create, Remove, Upgrade, Delete",
           "Create, Read, Update, Delete"
       ],
       answer: "Create, Read, Update, Delete"
    },
    {
       question: "Is JavaScript synchronous or asynchronous?",
       options: [
           "Synchronous",
           "Asynchronous",
           "Both",
           "Synchronous but can be used as asynchronous"
       ],
       answer: "Synchronous but can be used as asynchronous"
    },
    {
       question: "Amongst which of the following protocol is used to exchange the data between client and server?",
       options: ["HTTP", "TCP/IP", "SMTP", "FTP"],
       answer: "HTTP"
    },
    {
       question: "DOM stands for?",
       options: [
           "Document Object Model",
           "Direct Object Model",
           "Direct Over Model",
           "Document Over Model"
       ],
       answer: "Document Object Model"
    },
    {
       question: "SQL stands for?",
       options: [
           "Standard Query Language",
           "Structured Query Language",
           "Structured Quality Language",
           "Standard Query Language"
       ],
       answer: "Structured Query Language"
    },
    {
       question: "What is the purpose of CSS in Full Stack Development?",
       options: [
           "To style and format HTML elements",
           "To manage HTTP requests and responses",
           "To store and retrieve data",
           "None of the above"
       ],
       answer: "To style and format HTML elements"
    },
    {
       question: "Which of the following is not LAMP Stack?",
       options: ["Linux", "Apache", "MySQL", "Django"],
       answer: "Django"
    },
    {
       question: "MEAN Stack Expands to?",
       options: [
           "MongoDB, Express.js, Angular JS and Node.js",
           "Microsoft Windows, Express.js, AmigaOS and Nox.js",
           "MSX-DOS, Execution model, Angular JS and Node.js",
           "None of the above"
       ],
       answer: "MongoDB, Express.js, Angular JS and Node.js"
    },
    {
       question: "Which of the following Programming Language is Used in Server-Side Scripting?",
       options: ["Javascript", "Python", "PHP", "HTML"],
       answer: "PHP"
    }
];

// Function to load the quiz questions
function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    quizData.forEach((item, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p>`;

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        item.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            optionsDiv.appendChild(optionLabel);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

// Function to calculate and display the score
function calculateScore() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

// Load the quiz when the page loads
window.onload = () => {
    loadQuiz();
};

// Event listener for submit button
document.getElementById("submit").addEventListener("click", () => {
    clearInterval(timer); // Stop the timer when submitting
    calculateScore();
});

// Timer functionality
let timeLeft = 600; // 10 minutes (600 seconds)
const timerElement = document.createElement("p");
timerElement.id = "timer";
document.querySelector(".quiz-container").prepend(timerElement);

const timer = setInterval(() => {
    if (timeLeft >= 0) {
        timerElement.innerText = `Time Left: ${timeLeft}s`;
        timeLeft--;
    } else {
        clearInterval(timer);
        calculateScore();
        document.getElementById("submit").disabled = true;
    }
}, 1000);
