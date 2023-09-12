document.addEventListener("DOMContentLoaded", function () {
    // To get Current Weekday
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    let day = weekday[currentDate.getDay()];
    document.getElementById("CurrentDay").textContent = day;

    // To get Current Time in UTC
    const CurrentUTCtime = new Date(currentDate);
    let hours = CurrentUTCtime.getUTCHours();
    const minutes = CurrentUTCtime.getUTCMinutes();
    const seconds = CurrentUTCtime.getUTCSeconds();
    const milliseconds = CurrentUTCtime.getUTCMilliseconds();
    const Currenttime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}`;

    document.getElementById("CurrentUTCtime").textContent = Currenttime;
});
