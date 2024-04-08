const time = document.getElementById("time-text");
const meridiem = document.getElementById("meridiem-text");
const currDay = document.getElementById("day-text");

setInterval(() => {
    // Date object only returns a static timestamp, so new one is created each second (can be optimized to avoid this later on)
    const date = new Date();

    // Formats into hour:min:sec (12 hour clock), and splits the time and meridiem
    const [now, currMeridiem] = date.toLocaleTimeString().split(' ');
    time.innerText = now;
    meridiem.innerText = currMeridiem;

    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    currDay.innerText = date.toLocaleDateString(undefined, dateOptions);
}, 1000);