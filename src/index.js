import { validateIP } from "./helpers";


let input = document.querySelector('.search-bar__input');
let btn = document.querySelector('.search-bar__btn');

let ipInfo = document.querySelector('#ip');
let locationInfo = document.querySelector('#location');
let timezonaInfo = document.querySelector('#timezona');
let ispInfo = document.querySelector('#isp');




btn.addEventListener('click', getData);
input.addEventListener('keydown', handleKey);

function getData(){
    if(validateIP(input.value)){
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6RuuTTuJnr5QYi6frlwB4d8Qqth9U&ipAddress=${input.value}`)
        .then(response => response.json())
        .then(getInfo)
    } 
}

function handleKey(event){
    if(event.key === 'Enter'){
        getData();
    }
}

function getInfo(mapData){
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezonaInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}