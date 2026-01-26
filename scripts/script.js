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

//bron:https://codepen.io/shooft/pen/myepoJo  

const button = document.querySelector('.pauzeknop');
const iframe = document.querySelector('.festivalvideo');

let isPlaying = true; 

button.addEventListener('click', function() {
    if (isPlaying) {
        // PAUZEREN
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        
        // DEZE REGEL HEB IK WEGGEHAALD: button.innerText = "Afspelen"; 
        
        isPlaying = false; 
    } else {
        // AFSPELEN
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        
        // DEZE REGEL HEB IK WEGGEHAALD: button.innerText = "Pauze"; 
        
        isPlaying = true; 
    }
});

