const currentDay = document.getElementById("current-day")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const utcTime = new Date().getDay();
const myCurrentday = days[utcTime]
console.log("Current Day:", myCurrentday);
currentDay.innerText = `Current week: ${myCurrentday}`;

function Time() {
    let displayTime = document.getElementById("display-time")
    const utcTime = new Date();


displayTime.innerText = utcTime.toLocaleTimeString()
}

Time()
setInterval(Time, 1000)

