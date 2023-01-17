
const quizData = [
    {
        question: "Combien de branches dans l'IIT ?",
        a: "9 Branches ",
        b: "8 Branches ",
        c: "2 Branches ",
        correct: "a",
    },
    {
        question: "IIT c'est",
        a: "Institut International Telecommunication",
        b: "Institut International Technologie",
        c: "Institut International Tourisme",
        correct: "b",
    },
    {
        question: "Quelle est la nouvelle localisation de l'IIT ?",
        a: "Cite Ons, Sfax ",
        b: "Route Mahdia, Sfax ",
        c: "Route Afran , Sfax ",
        correct: "a",
    },
    {
        question: "Combien d'Universites conventionnees avec IIT ?",
        a: "21",
        b: "22",
        c: "23",
        correct: "a",
    },
    {
        question: "Combien d'entreprises partenaires ?",
        a: "52",
        b: "50",
        c: "56",
        correct: "b",
    },
    {
        question: "Quelle est l'annee d'inauguration de IIT ?",
        a: "2012",
        b: "2017",
        c: "2010",
        correct: "a",
    },
    {
        question: "Quelle est l'organisme d'accreditation des programmes d'etudes à l'IIT ?",
        a: "APIIN",
        b: "AKIIN",
        c: "ASIIN",
        correct: "c",
    },
    ];
    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const submitBtn = document.getElementById('submit')
    let currentQuiz = 0
    let score = 0
    loadQuiz()
    function loadQuiz() {
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz]
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
    }
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
            }
        })
        return answer
    }
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++
            }
            currentQuiz++
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                <h2>Vous avez repondre sur ${score}/${quizData.length} questions correctes</h2>
                <button onclick="location.reload()">Recharger</button>
                `
            }
        }
    })