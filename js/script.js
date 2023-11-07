// Elementos 
const number = document.querySelector('#number');
const seconds = document.querySelector('#seconds');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const darkMode = document.querySelector('#dark-mode');
const body = document.querySelector('body')
let interval;
let timer = 24;
let second = 60;

// Funções 
const counter = () => {
    second--
    if (second < 0) {
        timer--
        second = 59
    }

    number.innerHTML = formatTime(timer);
    seconds.innerHTML = formatTime(second);

    if (timer < 0) {
        timer = 0;
        second = 0;
        number.innerHTML = '00';
        seconds.innerHTML = '00';
    }

}


const startPomodoro = () => {
    interval = setInterval(counter, 1000);
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
}

const pausePomodoro = () => {
    clearInterval(interval)
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
}

const recomecePomodoro = () => {
    clearInterval(interval)
    timer = 24;
    second = 60;
    number.innerHTML = '25';
    seconds.innerHTML = '00';
    start.disabled = false;
    pause.disabled = false;
    reset.disabled = true;

}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}


// Eventos
start.addEventListener('click', () => {
    startPomodoro();
})

pause.addEventListener('click', () => {
    pausePomodoro();
})


reset.addEventListener('click', () => {
    recomecePomodoro();
})


darkMode.addEventListener('click', () => {
    body.classList.toggle('darkmode')
    darkMode.textContent === "Light Mode" ? darkMode.textContent = "Dark Mode" : darkMode.textContent = "Light Mode";
})


