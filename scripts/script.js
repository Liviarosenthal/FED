// JavaScript Document
console.log("hi");

//menu variables
const openButton = document.querySelector("header > button");
const sluitButton = document.querySelector("nav button");
const deNav = document.querySelector ("nav");

//menu eventlisteners 
openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

//menu functions 
function openMenu() {
    deNav.classList.add("toonMenu");
}

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}

