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
const buttonImg = button.querySelector('img')
const iframe = document.querySelector('.festivalvideo');

let isPlaying = true; 

button.addEventListener('click', function() {
    if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

        //img veranderen naar playknop
        buttonImg.src = "images/playbutton-video.svg"; 
        buttonImg.alt = "afspelen";

        isPlaying = false; 

    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

        //img veranderen naar pauzeknop      
        buttonImg.src = "images/pauze-knop.svg"; 
        buttonImg.alt = "pauzeren";

        isPlaying = true; 
    }
});

// om een youtube video te besturen> bron: MDN Web Docs - window.postMessage() en contentWindow
// het verstuurde bericht ('{"event":"command","func":"pauseVideo","args":""}', '*') bron: Google Developers - YouTube Iframe API Reference
