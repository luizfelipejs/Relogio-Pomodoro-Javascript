export const ClockMinutes = (hourSet) => {
    // A cada minuto que acaba se ganha 60 segundos 
    if ( hourSet.minutes > 0 ) {
        hourSet.minutes -= 1
        hourSet.seconds += 60
    }
}
export const subtractSeconds = (hourSet) => {
    // Tira os segundos
    if (hourSet.seconds > 0) {
        hourSet.seconds -= 1
    } 
    console.log(`${hourSet.minutes}:${hourSet.seconds}`);
           
}

export const Render = (HtmlElement, hourSet) => {  
    HtmlElement.innerText = `${hourSet.minutes}:${hourSet.seconds}`
}