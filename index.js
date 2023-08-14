const num = document.querySelector('#integer')
let cur = 0


const increase = document.querySelector('#plus')
const decrease = document.querySelector('#minus')
const rnd = document.querySelector('#random')
const reset = document.querySelector('#restart')


increase.onclick = () => {
    cur++
    num.innerHTML = cur
}

decrease.onclick = () => {
    cur--
    num.innerHTML = cur
}


rnd.onclick = () => {
    let rndnum = Math.floor(Math.random() * 201) - 100
    
    cur += rndnum 
    num.innerHTML = cur

    console.log('Random number is ' + rndnum);
}

reset.onclick = () => {
    cur = 0
    num.innerHTML = cur
}


// Timer
const timer = document.querySelector('.stopwatch')
const timerBtns = timer.querySelectorAll('button')
const timerScreen = timer.querySelector('#watch')
let interval 
let seconds = 0
let minutes = 0
let hours = 0


timerBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')
        
        if(btnType === 'Start') {
            startTimer()
        } else if(btnType === 'Stop') {
            resetStop()
        } else if(btnType === 'Reset') {
            resetWatch()
        }
    }
});


function startTimer() {
    clearInterval(interval)

    interval = setInterval(() => {
        seconds++

        if(seconds === 60) {
            seconds = 0
            minutes++
        }
         
        if(minutes === 60) {
            minutes = 0
            hours++
        }

        timerScreen.innerHTML = `${ hours < 10 ? `0${hours}` : hours}:${ minutes < 10 ? `0${minutes}` : minutes}:${ seconds < 10 ? `0${seconds}` : seconds} `
    }, 1000);
}

function resetStop() {
    clearInterval(interval)
}


function resetWatch() {
    clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0

    timerScreen.innerHTML = "00:00:00"
}