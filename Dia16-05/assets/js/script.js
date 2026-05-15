const menuDrop = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile")

menuMobile.addEventListener("click",() => {
    
    menuDrop.classList.toggle("visible");
})

