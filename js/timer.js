const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const countDownDate = new Date("Feb 13, 2023 17:00:00").getTime();
const timerUpdate = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = countDownDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    if(timeRemaining < 0) {
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        clearInterval(timerUpdate);
    }

}, 1000);