document.addEventListener("DOMContentLoaded", function () {
    // To get Current Weekday
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    let day = weekday[currentDate.getDay()];
    document.getElementById("CurrentDay").textContent = day;

    // To get Current Time
    const CurrentUTCtime = new Date(currentDate);
    let hours = CurrentUTCtime.getUTCHours();
    const minutes = CurrentUTCtime.getUTCMinutes();
    const Currenttime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

    document.getElementById("CurrentUTCtime").textContent = Currenttime;
});
