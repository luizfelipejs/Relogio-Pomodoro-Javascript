import {ClockMinutes, subtractSeconds, Render} from './modules/index'

const clockscreen = document.getElementById("interface-pomodoro") 
const buttonSubmit = document.getElementById("submit");

let hourSet = { minutes: 0, seconds: 0}

const subtractSecondsFunction = () => subtractSeconds(hourSet)
const ClockMinutesFunction = () => ClockMinutes(hourSet)
const RenderFunction = () => Render(clockscreen, hourSet)

let Change = true;
let minutes = setInterval(ClockMinutesFunction, 60000)
let seconds = setInterval(subtractSecondsFunction, 1000)     


RenderFunction()

buttonSubmit.addEventListener("click", function() {
    if (hourSet.minutes == 0 & Change == true) {
        hourSet.minutes = 25
        RenderFunction()
        ClockMinutesFunction()
        subtractSecondsFunction()
        buttonSubmit.innerText = "Parar Relogio"
    } else {
        // Loop 
       if (Change == true) {
            Change = false
            clearInterval(minutes)
            clearInterval(seconds)
            buttonSubmit.innerText = "Iniciar Relogio"
       } else if (Change == false)  {
            Change = true
            minutes = setInterval(ClockMinutesFunction, 60000)
            seconds = setInterval(subtractSecondsFunction, 1000)     
       }
    }
})

setInterval(RenderFunction, 1000)   

