 const botao = document.querySelector("button");


// function mensagem(){
//     console.log("Ola! clique detectado");
// }
// botao.addEventListener("click",() => {
//     alert("Olha! um clique");
// });


// botao.addEventListener("dblclick",() => {
//     alert("Duplo clique")
// });


// botao.addEventListener("mouseenter",() => {
//     alert("mouse entrando do elemento")
// });


// botao.addEventListener("mouseleave",() => {
//     alert("Mouse saindo do elemento")
// });


// botao.addEventListener("mousemouve",() => {
//     console.log("Posição em X", event.clientX, "Y:", event.clientY );
// });

// document.addEventListener("keyDown", (event) => {
//     console.log("Soltou:", event.key);
// })

document.addEventListener("click",(event) => {
    console.log(event.target);
})