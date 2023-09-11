const currentDayOfWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const displayTime = document.querySelector('[data-testid="currentUTCTime"]');

const utcDay = new Date().getDay();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const myCurrentday = days[utcDay]
console.log("Current Day:", myCurrentday);
currentDayOfWeek.innerText = `Current day: ${myCurrentday}`;

function Time() {
    const utcTime = new Date().getTime();
    displayTime.innerText = utcTime
}

Time()
setInterval(Time, 1000)

