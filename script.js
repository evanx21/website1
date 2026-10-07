const scrollCue = document.querySelector(".scroll-cue");
const footer = document.querySelector("footer");

window.addEventListener('scroll',() =>{
    if(window.scrollY + window.innerHeight >= footer.offsetTop){
        scrollCue.hidden = true
    }
    else{
        scrollCue.hidden = false
    }
})