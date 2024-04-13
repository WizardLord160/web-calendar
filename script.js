const time = document.getElementById("time-text");
const meridiem = document.getElementById("meridiem-text");
const currDay = document.getElementById("day-text");

/*
 * Updates the current time and date in realtime
 * Runs every 1000 milliseconds
 * Improvements: Date does not need to be recalculated at such a fast interval
 */
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

/*
 * Highlights the current day with a red circle
 * Improvements: Make it update live?
 */
function circleCurrentDay() {
    // Only getting the value of the day of month
    const date = new Date();
    const day = date.toLocaleDateString(undefined, { day: 'numeric' });

    // Selecting the proper grid cell in the calendar
    const calendar_cell = document.querySelector('#d' + day + ' div');

    // The red circle
    calendar_cell.style['background-color'] = 'rgb(255, 0, 0, 0.2)';
    calendar_cell.style['border-radius'] = '50%';
    
}

/*
 * Creates the dates on the calendar
 * Decides which day of week to start the 1st
 * TODO: Decide where to place 1st of month
 *       Decide how many days each month has
 */
function setUpCalendar() {

    // gets the calendar list element
    const calendar = document.querySelector('.calendar');

    // inserts the html into the list
    for (let i = 1; i <= 31; i++) {
        const HTMLString = `<li id="d${i}"><div></div>${i}</li>`;
        calendar.insertAdjacentHTML('beforeEnd', HTMLString);
    }
}


setUpCalendar();
circleCurrentDay();