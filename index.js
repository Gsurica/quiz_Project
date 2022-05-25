console.log("Hello world")

const answerButton = document.getElementById("answerButton")
const answer = document.getElementById("answer")
const questionLocal = document.getElementById("questionLocal")
let score = document.getElementById("score").innerHTML
const restartButton = document.getElementById("restartButton")

const questions = [
    {
        question: "O poder está nas mãos não da minoria, mas de todo o povo, e todos são iguais perante a lei(Tucídies, Guerra do Peloponeso) A frase foi dita por Péricles, governante de Atenas no século V a.C.. A forma de governo a que ele se refere é",
        answer: "Democracia"
    },
    {
        question: "Simplificando, a bulimia é um transtorno alimentar em que a pessoa geralmente:",
        answer: "alimenta e depois vomita"
    },
    {
        question: "A secretaria de Educação de uma determinada cidade pretende distribuir papel sulfite para 200.000 estudantes do ensino fundamental. Para cumprir esse objetivo são compradas 250 caixas contendo os papéis. Se cada caixa tiver 200 pacotes e cada pacote 500 folhas então podemos afirmar que cada estudante receberá:",
        answer: "125"
    },
    {
        question: "A linha do Equador divide a Terra em dois hemisférios, sendo eles:",
        answer: "setentrional e meridional"
    },
    {
        question: "Por Entradas e Bandeiras, entende-se, em história do Brasil:",
        answer: "As expedições pioneiras de desbravamento e povoação do interior do país"
    },
    {
        question: "ANCORA",
        answer: "ANCORA"
    },
]

const save = (value) => localStorage.setItem("db_question", JSON.stringify(value))
const get = (value) => JSON.parse(localStorage.getItem(value))

const question = () => {
    const firstQuestion = questions[0]
    return firstQuestion
}

const nextQuestion = (question) => {
    if(answer.value === question){
        questions.splice(0, 1)
        save(questions)
        alert("acertou!")
        point()
        loadOnScreen(questions[0].question)
        winnerOrLoose()
    } else {
        questions.splice(0, 1)
        save(questions)
        alert("ERROU!")
        loadOnScreen(questions[0].question)
        winnerOrLoose()
    }
}

const point = () => {
    score++ 
    document.getElementById("score").innerHTML = score
}

const winnerOrLoose = () => {
    console.log("to aqui!")
    if(questions.length === 1){
        if(score === 5){
            alert("voce ganhou!")
            save(questions)
        } else {
            alert("voce perdeu!")
            save(questions)
        }
    }
}

const loadOnScreen = (question) => {
    questionLocal.innerHTML = `<h1>${question}</h1>`
}

loadOnScreen(question().question)

answerButton.addEventListener("click", () => {
    save(questions)
    console.log(get("db_question"))
    nextQuestion(question().answer)
})

restartButton.addEventListener("click", () => {
    save(questions)
    window.location.reload()
})

