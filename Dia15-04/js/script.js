// pegar cada elemeto que vamos usar 
// Como podemos identificar nossos elementos?

//Trazer nossos elemntos para o javascript

const title = document.getElementById("title");
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2")
function trocaCor(){
    title.style.color = "red";

// acessar estilos
}
function darOi(){
    alert("Eai");    
}
function mensagemParao() {
    title.textContent= "Descubra os segredos";
}
function trocaMensagem(){
    title.textContent = "Texto trocado";
}
button1.addEventListener('click', trocaCor);
button1.addEventListener('click', trocaMensagem);
button2.addEventListener('click',mensagemParao);

// Ação = mouseenter, mouseout, click
// AÇÂO || O QUE VAI ACONTECER
// Eventos 
// Ação nossa, esperando uma ação, nesse caso o 'click';
// Addevent precisa de dois argumentos(Ação e oq acontece)