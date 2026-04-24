// const title = document.querySelector("h3");
// const btn = document.querySelector("button");
// const text = document.querySelector("p");
// const span  = document.querySelector("span");
// const btn2= document.getElementById("btn-1");
// const btn3 = document.getElementById("btn-3")
// btn.addEventListener("click", () =>{
//     // Quando clicarmos a função vai adicionar uma classe ao titulo
//     title.classList.add("green");
//     text.classList.add("green")
//     span.classList.add("green")
//     // Muito legal!!
// })

// btn2.addEventListener("click", () => {
//  span.classList.remove("green");
//  title.classList.remove("green")
// })

// btn3.addEventListener("click", () => {
//     title.classList.toggle("green")
// })

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const img1  = document.querySelector(".img-1");
const img2  = document.querySelector(".img-2");
const img3  = document.querySelector(".img-3");

btn1.addEventListener("click",() =>{
    img1.classList.toggle("ativo");
    if(btn1.textContent == "Esconda a imagem"){
        btn1.textContent = "Apareça imagem"
    }
    else{
        btn1.textContent = "Esconda a imagem"
    }

   
})

btn2.addEventListener("click",() =>{
    img2.classList.toggle("ativo");
    if(btn2.textContent == "Esconda a imagem"){
        btn2.textContent = "Apareça imagem"
    }
    else{
        btn2.textContent = "Esconda a imagem"
    }

   
})

btn3.addEventListener("click",() =>{
    img3.classList.toggle("ativo");
    if(btn3.textContent == "Esconda a imagem"){
        btn3.textContent = "Apareça imagem"
    }
    else{
        btn3.textContent = "Esconda a imagem"
    }

   
})


// btn1.addEventListener("dblclick",() =>{
//     img1.style.visibility = "visible";
//     btn1.textContent = "Esconder imagem";
    
// })
