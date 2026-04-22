let currentQuestionIndex = 0;
let score = document.getElementById("score");

const questions = document.querySelectorAll(".quiz-question");

function activateQuestion() {
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].classList.add("active");
    } else {
        alert("Parabéns! Você completou o quiz.");
    }
}

function answer(isCorrect) {
    if (isCorrect) {
        // Remove a pergunta atual
        questions[currentQuestionIndex].classList.remove("active");
        
        // Avança o índice e ativa a próxima
        currentQuestionIndex++;
        activateQuestion();
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

// Selecionamos todos os botões que são opções
const buttons = document.querySelectorAll(".option");

// Corrigido: usamos 'let' no loop
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const isCorrect = buttons[i].classList.contains("correct");
        answer(isCorrect);
        if(){
            
        }
    });
    
    
}