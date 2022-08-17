import { validateIP } from "./helpers";


let input = document.querySelector('.search-bar__input');
let btn = document.querySelector('.search-bar__btn');

btn.addEventListener('click', getData);
input.addEventListener('keydown', handleKey);

function getData(){
    if(validateIP(input.value)){
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6RuuTTuJnr5QYi6frlwB4d8Qqth9U&ipAddress=${input.value}`)
        .then(response => response.json())
        .then(console.log)
    } else {

    }
}

function handleKey(event){
    if(event.key === 'Enter'){
        getData();
    }
}