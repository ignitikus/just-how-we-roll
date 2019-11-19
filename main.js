/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
document.querySelector("#d6-roll").src = './images/start/d6.png'
document.querySelector("#double-d6-roll-1").src = './images/start/d6.png'
document.querySelector("#double-d6-roll-2").src = './images/start/d6.png'
document.querySelector("#d12-roll").src = './images/start/d12.jpeg'
document.querySelector("#d20-roll").src = './images/start/d20.jpg'

/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);

    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/
function d6Roll(){
    let d6Roll = getRandomNumber(6)
    document.querySelector('#d6-roll').src = `./images/d6/${d6Roll}.png`
    sixes.push(d6Roll)
    document.querySelector('#d6-rolls-mean').innerText = mean(sixes)
    document.querySelector('#d6-rolls-median').innerText = median(sixes)
    document.querySelector('#d6-rolls-mode').innerText = mode(sixes)

}
function dDouble6Roll(){
    let d6Roll = getRandomNumber(6)
    let dSecond6Roll = getRandomNumber(6)
    document.querySelector('#double-d6-roll-1').src = `./images/d6/${d6Roll}.png`
    document.querySelector('#double-d6-roll-2').src = `./images/d6/${dSecond6Roll}.png`
    doubleSixes.push(d6Roll + dSecond6Roll)
    document.querySelector('#double-d6-rolls-mean').innerText = mean(doubleSixes)
    document.querySelector('#double-d6-rolls-median').innerText = median(doubleSixes)
    document.querySelector('#double-d6-rolls-mode').innerText = mode(doubleSixes)
}

function d12Roll(){
    let d12Roll = getRandomNumber(12);
    document.querySelector('#d12-roll').src = `./images/numbers/${d12Roll}.png`
    twelves.push(d12Roll)
    document.querySelector('#d12-rolls-mean').innerText = mean(twelves)
    document.querySelector('#d12-rolls-median').innerText = median(twelves)
    document.querySelector('#d12-rolls-mode').innerText = mode(twelves)
}

function d20Roll(){
    let d20Roll = getRandomNumber(20);
    document.querySelector('#d20-roll').src = `./images/numbers/${d20Roll}.png`
    twenties.push(d20Roll)
    document.querySelector('#d20-rolls-mean').innerText = mean(twenties)
    document.querySelector('#d20-rolls-median').innerText = median(twenties)
    document.querySelector('#d20-rolls-mode').innerText = mode(twenties)
}

/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector('#d6-roll').addEventListener('click', d6Roll)
document.querySelector('#double-d6-roll-1').addEventListener('click', dDouble6Roll)
document.querySelector('#double-d6-roll-2').addEventListener('click', dDouble6Roll)
document.querySelector('#d12-roll').addEventListener('click', d12Roll)
document.querySelector('#d20-roll').addEventListener('click', d20Roll)
document.querySelector('#reset-button').addEventListener('click', reset)

/****************
 * MATH SECTION *
 ****************/

let mean = (arr) => {
    let result = 0
    for(let i = 0; i<arr.length; i++){
        result += arr[i]
    } return (result / arr.length).toFixed(2)
}

let median = (arr) => {
    if(arr.length <= 1){
        return arr
    }
    if(arr.length%2===0){
        return arr.sort((a,b)=>{return a-b}).slice(Math.floor(arr.length/2),(Math.floor(arr.length/2)+1))
    }
        return arr.sort((a,b)=>{return a-b}).slice(Math.floor(arr.length/2),(Math.floor(arr.length/2) *-1))
}

let mode = (arr) => {
    let currentResult = 0;
    let secondResult = 0;
    let answer = '';
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(i<1){
                if(arr[i]===arr[j]){
                currentResult++
                answer = arr[i]
                }
            } else{
                if(arr[i]===arr[j]){
                secondResult++
                }
            }
            }
            if(currentResult >= secondResult){
                secondResult=0;
            } else {
                answer = arr[i]
                currentResult = secondResult;
                secondResult=0
        }
    }
    return answer
}

/*********
 * RESET *
 *********/
function reset(){
    document.querySelector("#d6-roll").src = './images/start/d6.png'
    document.querySelector("#double-d6-roll-1").src = './images/start/d6.png'
    document.querySelector("#double-d6-roll-2").src = './images/start/d6.png'
    document.querySelector("#d12-roll").src = './images/start/d12.jpeg'
    document.querySelector("#d20-roll").src = './images/start/d20.jpg';
    sixes.splice(0,sixes.length)
    doubleSixes.splice(0,doubleSixes.length)
    twelves.splice(0,twelves.length)
    twenties.splice(0,twenties.length)
    document.querySelector('#d6-rolls-mean').innerHTML = '&nbsp'
    document.querySelector('#d6-rolls-median').innerHTML = '&nbsp'
    document.querySelector('#d6-rolls-mode').innerHTML = '&nbsp'
    document.querySelector('#double-d6-rolls-mean').innerHTML = '&nbsp'
    document.querySelector('#double-d6-rolls-median').innerHTML = '&nbsp'
    document.querySelector('#double-d6-rolls-mode').innerHTML = '&nbsp'
    document.querySelector('#d12-rolls-mean').innerHTML = '&nbsp'
    document.querySelector('#d12-rolls-median').innerHTML = '&nbsp'
    document.querySelector('#d12-rolls-mode').innerHTML = '&nbsp'
    document.querySelector('#d20-rolls-mean').innerHTML = '&nbsp'
    document.querySelector('#d20-rolls-median').innerHTML = '&nbsp'
    document.querySelector('#d20-rolls-mode').innerHTML = '&nbsp'
}