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

const tipButton = document.querySelector("#tip-button");
const travelTip = document.querySelector("#travel-tip");

tipButton.addEventListener("click", ()=> {
    if(travelTip.hidden){
        travelTip.hidden = false;
        tipButton.textContent = "Hide my travel tip";
    }
    else{
        travelTip.hidden = true;
        tipButton.textContent = "Show my travel tip";
    }
})

const map = L.map('map').setView([21.48, -157.95], 9);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const day1Marker = L.marker([21.28, -157.83]).addTo(map);
day1Marker.bindPopup('Day 1: Waikīkī Beach<br><a href="#day-1">Read Day 1</a>');

const day2Marker = L.marker([21.53, -158.04]).addTo(map);
day2Marker.bindPopup('Day 2: Dole Plantation<br><a href="#day-2">Read Day 2</a>');

const day3Marker = L.marker([21.36, -157.95]).addTo(map);
day3Marker.bindPopup('Day 3: Pearl Harbor<br><a href="#day-3">Read Day 3</a>');

const day4Marker = L.marker([21.52, -157.84]).addTo(map);
day4Marker.bindPopup('Day 4: Kualoa Ranch<br><a href="#day-4">Read Day 4</a>');

const day5Marker = L.marker([21.61, -158.09]).addTo(map);
day5Marker.bindPopup('Day 5: Turtle Beach<br><a href="#day-5">Read Day 5</a>');
