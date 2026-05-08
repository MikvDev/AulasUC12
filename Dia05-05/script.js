


const btn = document.getElementsByClassName("btn");
const ctn = document.getElementById("container");

// criar novos elementos e fazelos aparecer no HTML

const text = document.createElement("p");
text.textContent = "Texto criado com sucesso!";

// Depois de criado um elemnto. precisamos dizer a onde ele ira ser posicionado!
ctn.appendChild(text); 
