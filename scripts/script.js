// JavaScript Document
console.log("hi");

/* menu openen de MENU button */
var openButton = document.querySelector("header > button");

openButton.addEventListener("click",openMenu);

function openMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

/* menu sluiten met de sluit button */

var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click",sluitMenu);

function sluitMenu () {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}

