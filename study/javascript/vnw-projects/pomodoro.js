let start = document.querySelector('#start');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');

let workMinutes = document.querySelector('#work_minutes');
let workSeconds = document.querySelector('#work_seconds');

let breakMinutes = document.querySelector('#break_minutes');
let breakSeconds = document.querySelector('#break_seconds');

let increaseWork = document.querySelector('#work_increase');
let decreaseWork = document.querySelector('#work_decrease');

let increaseBreak = document.querySelector('#break_increase');
let decreaseBreak = document.querySelector('#break_decrease');


// timer variable to reference
let startTimer

// add event listener to each button
start.addEventListener('click', clickStart);
reset.addEventListener('click', clickReset);
pause.addEventListener('click', clickPause);

increaseWork.addEventListener('click', increase);
decreaseWork.addEventListener('click', decrease);

increaseBreak.addEventListener('click', increase);
decreaseBreak.addEventListener('click', decrease);

function increase(e) {
    //console.log(e.target.id);
    if(e.target.id === 'work_increase') {
        workMinutes.innerText ++;
    }
    if(e.target.id === 'break_increase') {
        breakMinutes.innerText ++;
    }
}

function decrease(e) {
    if(workMinutes.innerText > 0) {
        if(e.target.id === 'work_decrease') {
            workMinutes.innerText --;
        }
    }
    if(breakMinutes.innerText > 0) {
        if(e.target.id === 'break_decrease') {
            breakMinutes.innerText --;
        } 
    }
}

// button functions
function clickStart() {
    start.disabled = true;
    if(startTimer === undefined){
        // call function timer each 1 second
        startTimer = setInterval(countDownTimer, 1000) 
    }
}

// redefining the default values of work session and break
function clickReset() {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";
    // cancel repetition defined by setInterval
    clearInterval(startTimer)
    startTimer = undefined;
}

function clickPause() {
    clearInterval(startTimer);
    startTimer = undefined;
    start.disabled = false;
}


// counting the time
function countDownTimer(){
    //work timer 
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    //when work timer finished, start break timer 
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        } else {
            console.log('Finished')
        }
    }
}

