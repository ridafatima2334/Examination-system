/* =====================================================
   VERIF - ONLINE EXAMINATION SYSTEM
   COMPLETE FUNCTIONAL JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       EXAM DATA
    ===================================================== */

    const examData = {

        "Mathematics": {
            duration: 30,
            questions: [
                {
                    question: "What is 15 + 25?",
                    options: ["30", "35", "40", "45"],
                    answer: 2
                },
                {
                    question: "What is the square root of 64?",
                    options: ["6", "7", "8", "9"],
                    answer: 2
                },
                {
                    question: "What is 12 × 5?",
                    options: ["50", "60", "70", "80"],
                    answer: 1
                },
                {
                    question: "What is 100 ÷ 4?",
                    options: ["20", "25", "30", "40"],
                    answer: 1
                },
                {
                    question: "What is 10% of 200?",
                    options: ["10", "20", "30", "40"],
                    answer: 1
                },
                {
                    question: "What is the value of 5²?",
                    options: ["10", "15", "20", "25"],
                    answer: 3
                },
                {
                    question: "Which number is a prime number?",
                    options: ["4", "6", "9", "11"],
                    answer: 3
                },
                {
                    question: "What is 7 × 8?",
                    options: ["54", "56", "58", "64"],
                    answer: 1
                },
                {
                    question: "What is 50 - 18?",
                    options: ["28", "30", "32", "34"],
                    answer: 2
                },
                {
                    question: "What is 3/4 expressed as a percentage?",
                    options: ["25%", "50%", "75%", "80%"],
                    answer: 2
                }
            ]
        },


        "Web Development": {
            duration: 5,
            questions: [
                {
                    question: "Which language is used to structure a web page?",
                    options: [
                        "CSS",
                        "HTML",
                        "JavaScript",
                        "Python"
                    ],
                    answer: 1
                },
                {
                    question: "Which language is used for styling web pages?",
                    options: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "SQL"
                    ],
                    answer: 1
                },
                {
                    question: "Which language adds interactivity to websites?",
                    options: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "XML"
                    ],
                    answer: 2
                },
                {
                    question: "Which HTML tag creates a hyperlink?",
                    options: [
                        "<link>",
                        "<a>",
                        "<href>",
                        "<url>"
                    ],
                    answer: 1
                },
                {
                    question: "Which tag is used for the largest heading?",
                    options: [
                        "<h6>",
                        "<head>",
                        "<h1>",
                        "<heading>"
                    ],
                    answer: 2
                },
                {
                    question: "Which CSS property changes text color?",
                    options: [
                        "font-color",
                        "text-color",
                        "color",
                        "foreground"
                    ],
                    answer: 2
                },
                {
                    question: "Which symbol is used for an ID selector in CSS?",
                    options: [
                        ".",
                        "#",
                        "*",
                        "@"
                    ],
                    answer: 1
                },
                {
                    question: "Which symbol is used for a class selector in CSS?",
                    options: [
                        "#",
                        ".",
                        "*",
                        "&"
                    ],
                    answer: 1
                },
                {
                    question: "Which method is commonly used to print output in JavaScript?",
                    options: [
                        "console.log()",
                        "print()",
                        "write.console()",
                        "display()"
                    ],
                    answer: 0
                },
                {
                    question: "Which keyword declares a constant in JavaScript?",
                    options: [
                        "var",
                        "let",
                        "constant",
                        "const"
                    ],
                    answer: 3
                }
            ]
        },


        "Computer Networks": {
            duration: 5,
            questions: [
                {
                    question: "What does LAN stand for?",
                    options: [
                        "Large Area Network",
                        "Local Area Network",
                        "Long Area Network",
                        "Linked Area Network"
                    ],
                    answer: 1
                },
                {
                    question: "Which device connects different networks?",
                    options: [
                        "Switch",
                        "Router",
                        "Keyboard",
                        "Monitor"
                    ],
                    answer: 1
                },
                {
                    question: "What does IP stand for?",
                    options: [
                        "Internet Protocol",
                        "Internal Program",
                        "Internet Program",
                        "Information Protocol"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol is used for web browsing?",
                    options: [
                        "FTP",
                        "HTTP",
                        "SMTP",
                        "SSH"
                    ],
                    answer: 1
                },
                {
                    question: "Which device connects computers in a LAN?",
                    options: [
                        "Switch",
                        "Printer",
                        "Scanner",
                        "Modem"
                    ],
                    answer: 0
                },
                {
                    question: "What does WAN stand for?",
                    options: [
                        "Wide Area Network",
                        "Web Area Network",
                        "Wireless Area Network",
                        "World Access Network"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol is used for sending emails?",
                    options: [
                        "HTTP",
                        "SMTP",
                        "FTP",
                        "TCP"
                    ],
                    answer: 1
                },
                {
                    question: "Which protocol is used to transfer files?",
                    options: [
                        "FTP",
                        "SMTP",
                        "HTTP",
                        "DNS"
                    ],
                    answer: 0
                },
                {
                    question: "What does DNS translate?",
                    options: [
                        "Passwords",
                        "Domain names to IP addresses",
                        "Files",
                        "Emails"
                    ],
                    answer: 1
                },
                {
                    question: "Which layer is responsible for routing in OSI?",
                    options: [
                        "Physical",
                        "Data Link",
                        "Network",
                        "Application"
                    ],
                    answer: 2
                }
            ]
        }
    };


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentExam = null;
    let currentQuestion = 0;

    let userAnswers = [];

    let timerInterval = null;

    let totalSeconds = 0;

    let examStarted = false;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const takeExamSection =
        document.querySelector("#take-exam");

    const resultsSection =
        document.querySelector("#results");

    const questionText =
        document.querySelector("#questionText");

    const questionNumber =
        document.querySelector("#questionNumber");

    const answerContainer =
        document.querySelector(".answer-options");

    const timerElement =
        document.querySelector("#timer");

    const nextButton =
        document.querySelector(".next-question");

    const previousButton =
        document.querySelector(".prev-question");

    const submitButton =
        document.querySelector("#submitExam");

    const questionNumbers =
        document.querySelector(".numbers");

    const examTitle =
        document.querySelector(".exam-header h3");


    /* =====================================================
       START EXAM BUTTONS
    ===================================================== */

    const startButtons =
        document.querySelectorAll(".start-btn[data-exam]");


    startButtons.forEach(button => {

        button.addEventListener("click", function () {

            const examName =
                this.getAttribute("data-exam");

            startExam(examName);

        });

    });


    /* =====================================================
       START EXAM FUNCTION
    ===================================================== */

    function startExam(examName) {

        if (!examData[examName]) {

            alert("This examination is not available yet.");

            return;
        }

        currentExam = examData[examName];

        currentQuestion = 0;

        userAnswers =
            new Array(currentExam.questions.length).fill(null);

        totalSeconds =
            currentExam.duration * 60;

        examStarted = true;

        /* Update exam title */

        if (examTitle) {

            examTitle.textContent =
                `${examName} Test`;
        }

        /* Stop old timer */

        clearInterval(timerInterval);

        /* Load first question */

        loadQuestion();

        /* Start timer */

        startTimer();

        /* Scroll to exam */

        takeExamSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* =====================================================
       LOAD QUESTION
    ===================================================== */

    function loadQuestion() {

        if (!currentExam) return;

        const question =
            currentExam.questions[currentQuestion];


        /* Question number */

        if (questionNumber) {

            questionNumber.textContent =
                currentQuestion + 1;
        }


        /* Question text */

        if (questionText) {

            questionText.textContent =
                question.question;
        }


        /* Create options */

        if (answerContainer) {

            answerContainer.innerHTML = "";

            question.options.forEach((option, index) => {

                const button =
                    document.createElement("button");

                button.className = "answer-option";

                button.type = "button";

                button.innerHTML = `
                    <span>${String.fromCharCode(65 + index)}</span>
                    ${option}
                `;


                /* Already selected */

                if (
                    userAnswers[currentQuestion] === index
                ) {

                    button.classList.add("selected");
                }


                /* Select answer */

                button.addEventListener("click", function () {

                    selectAnswer(index);

                });


                answerContainer.appendChild(button);

            });

        }


        /* Question navigation */

        createQuestionNumbers();


        /* Update navigation */

        updateNavigation();

    }


    /* =====================================================
       SELECT ANSWER
    ===================================================== */

    function selectAnswer(answerIndex) {

        if (!examStarted) return;

        userAnswers[currentQuestion] =
            answerIndex;


        const options =
            document.querySelectorAll(".answer-option");


        options.forEach((option, index) => {

            option.classList.remove("selected");

            if (index === answerIndex) {

                option.classList.add("selected");
            }

        });


        updateQuestionNumberStatus();

    }


    /* =====================================================
       NEXT QUESTION
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener("click", function () {

            if (!examStarted) {

                alert("Please start an exam first.");

                return;
            }


            if (
                userAnswers[currentQuestion] === null
            ) {

                alert(
                    "Please select an answer before continuing."
                );

                return;
            }


            if (
                currentQuestion <
                currentExam.questions.length - 1
            ) {

                currentQuestion++;

                loadQuestion();

            } else {

                const confirmSubmit =
                    confirm(
                        "You have reached the last question. Submit your exam?"
                    );

                if (confirmSubmit) {

                    submitExam();
                }

            }

        });

    }


    /* =====================================================
       PREVIOUS QUESTION
    ===================================================== */

    if (previousButton) {

        previousButton.addEventListener("click", function () {

            if (!examStarted) {

                alert("Please start an exam first.");

                return;
            }


            if (currentQuestion > 0) {

                currentQuestion--;

                loadQuestion();

            } else {

                alert("This is the first question.");

            }

        });

    }


    /* =====================================================
       QUESTION NUMBERS
    ===================================================== */

    function createQuestionNumbers() {

        if (!questionNumbers || !currentExam) return;

        questionNumbers.innerHTML = "";

        currentExam.questions.forEach(
            (question, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.textContent =
                    index + 1;


                if (index === currentQuestion) {

                    button.classList.add("active");
                }


                if (userAnswers[index] !== null) {

                    button.classList.add("answered");
                }


                button.addEventListener("click", function () {

                    currentQuestion = index;

                    loadQuestion();

                });


                questionNumbers.appendChild(button);

            }
        );

    }


    /* =====================================================
       UPDATE QUESTION STATUS
    ===================================================== */

    function updateQuestionNumberStatus() {

        const buttons =
            document.querySelectorAll(".numbers button");

        buttons.forEach((button, index) => {

            button.classList.remove("answered");

            if (userAnswers[index] !== null) {

                button.classList.add("answered");
            }

        });

    }


    /* =====================================================
       NAVIGATION UPDATE
    ===================================================== */

    function updateNavigation() {

        if (!currentExam) return;


        if (previousButton) {

            previousButton.disabled =
                currentQuestion === 0;

            previousButton.style.opacity =
                currentQuestion === 0
                    ? "0.5"
                    : "1";
        }


        if (nextButton) {

            if (
                currentQuestion ===
                currentExam.questions.length - 1
            ) {

                nextButton.innerHTML =
                    `Submit <i class="fa-solid fa-check"></i>`;

            } else {

                nextButton.innerHTML =
                    `Next <i class="fa-solid fa-arrow-right"></i>`;
            }

        }

    }


    /* =====================================================
       TIMER
    ===================================================== */

    function startTimer() {

        clearInterval(timerInterval);


        updateTimer();


        timerInterval =
            setInterval(function () {

                totalSeconds--;

                updateTimer();


                if (totalSeconds <= 0) {

                    clearInterval(timerInterval);

                    alert(
                        "Time is over! Your exam will be submitted automatically."
                    );

                    submitExam();

                }

            }, 1000);

    }


    /* =====================================================
       UPDATE TIMER
    ===================================================== */

    function updateTimer() {

        if (!timerElement) return;


        const minutes =
            Math.floor(totalSeconds / 60);

        const seconds =
            totalSeconds % 60;


        timerElement.textContent =
            `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;


        /* Red warning */

        if (totalSeconds <= 60) {

            timerElement.style.color =
                "#dc2626";

        } else {

            timerElement.style.color =
                "#08786f";
        }

    }


    /* =====================================================
       SUBMIT EXAM
    ===================================================== */

    if (submitButton) {

        submitButton.addEventListener(
            "click",
            function () {

                if (!examStarted) {

                    alert(
                        "Please start an examination first."
                    );

                    return;
                }


                const unanswered =
                    userAnswers.filter(
                        answer => answer === null
                    ).length;


                if (unanswered > 0) {

                    const confirmSubmit =
                        confirm(
                            `You have ${unanswered} unanswered question(s).\n\nDo you still want to submit?`
                        );


                    if (!confirmSubmit) {

                        return;
                    }

                }


                submitExam();

            }
        );

    }


    /* =====================================================
       SUBMIT EXAM FUNCTION
    ===================================================== */

    function submitExam() {

        if (!currentExam) return;


        clearInterval(timerInterval);


        let correct = 0;


        currentExam.questions.forEach(
            (question, index) => {

                if (
                    userAnswers[index] ===
                    question.answer
                ) {

                    correct++;

                }

            }
        );


        const total =
            currentExam.questions.length;


        const wrong =
            total - correct;


        const percentage =
            Math.round(
                (correct / total) * 100
            );


        const passed =
            percentage >= 50;


        /* Stop exam */

        examStarted = false;


        /* Update result */

        updateResults(
            currentExam,
            correct,
            wrong,
            total,
            percentage,
            passed
        );


        /* Scroll to result */

        setTimeout(() => {

            resultsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);


        /* Reset button */

        if (nextButton) {

            nextButton.innerHTML =
                `Next <i class="fa-solid fa-arrow-right"></i>`;
        }

    }


    /* =====================================================
       UPDATE RESULTS
    ===================================================== */

    function updateResults(
        exam,
        correct,
        wrong,
        total,
        percentage,
        passed
    ) {

        /* Big score */

        const score =
            document.querySelector(
                ".circle-score span"
            );


        if (score) {

            score.textContent =
                `${percentage}%`;
        }


        /* Performance heading */

        const performance =
            document.querySelector(
                ".result-score-big h3"
            );


        if (performance) {

            if (percentage >= 80) {

                performance.textContent =
                    "Excellent Performance";

            } else if (percentage >= 60) {

                performance.textContent =
                    "Good Performance";

            } else if (percentage >= 50) {

                performance.textContent =
                    "Passed Successfully";

            } else {

                performance.textContent =
                    "Keep Practicing";
            }

        }


        /* Performance message */

        const message =
            document.querySelector(
                ".result-score-big p"
            );


        if (message) {

            if (passed) {

                message.textContent =
                    "Congratulations! You passed the examination.";

            } else {

                message.textContent =
                    "Don't worry. Keep practicing and try again.";
            }

        }


        /* Result statistics */

        const statValues =
            document.querySelectorAll(
                ".result-stats strong"
            );


        if (statValues.length >= 4) {

            statValues[0].textContent =
                total;

            statValues[1].textContent =
                correct;

            statValues[2].textContent =
                wrong;

            const minutes =
                Math.floor(
                    (exam.duration * 60 - totalSeconds) / 60
                );

            statValues[3].textContent =
                `${Math.max(minutes, 1)} min`;

        }


        /* Add latest result */

        addResultHistory(
            exam,
            percentage,
            passed
        );

    }


    /* =====================================================
       RESULT HISTORY
    ===================================================== */

    function addResultHistory(
        exam,
        percentage,
        passed
    ) {

        const history =
            document.querySelector(
                ".result-history"
            );


        if (!history) return;


        /* Remove old dynamically created result */

        const oldResult =
            history.querySelector(
                ".new-result"
            );


        if (oldResult) {

            oldResult.remove();
        }


        const row =
            document.createElement("div");


        row.className =
            "result-row new-result";


        let icon =
            "fa-code";


        if (exam === "Mathematics") {

            icon =
                "fa-calculator";

        } else if (exam === "Computer Networks") {

            icon =
                "fa-network-wired";

        }


        row.innerHTML = `

            <div class="result-subject">

                <div>
                    <i class="fa-solid ${icon}"></i>
                </div>

                <span>

                    ${exam}

                    <small>
                        Just completed
                    </small>

                </span>

            </div>


            <strong>
                ${percentage}%
            </strong>


            <span class="${passed ? "passed" : "failed"}">
                ${passed ? "Passed" : "Failed"}
            </span>

        `;


        history.insertBefore(
            row,
            history.children[1]
        );

    }


    /* =====================================================
       NAVBAR ACTIVE LINK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(item => {

                    item.classList.remove("active");

                });


                this.classList.add("active");

            }
        );

    });


    /* =====================================================
       SCROLL ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >= sectionTop
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.classList.add("active");

                }

            });

        }
    );


    /* =====================================================
       HOME PREVIEW OPTIONS
    ===================================================== */

    const previewOptions =
        document.querySelectorAll(
            ".preview-question .options button"
        );


    previewOptions.forEach(option => {

        option.addEventListener(
            "click",
            function () {

                previewOptions.forEach(
                    item =>
                        item.classList.remove("selected")
                );


                this.classList.add("selected");

            }
        );

    });


    /* =====================================================
       PREVIEW NEXT BUTTON
    ===================================================== */

    const previewNext =
        document.querySelector(
            ".preview-bottom .next-btn"
        );


    if (previewNext) {

        previewNext.addEventListener(
            "click",
            function () {

                document
                    .querySelector("#exams")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    /* =====================================================
       INITIAL RESULT
    ===================================================== */

    console.log(
        "Verif Online Examination System loaded successfully."
    );

});