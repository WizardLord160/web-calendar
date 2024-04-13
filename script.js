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

function circleCurrentDay() {
    // Only getting the value of the day of month
    const date = new Date();
    const day = date.toLocaleDateString(undefined, { day: 'numeric' });

    // Selecting the proper grid cell in the calendar
    const calendar_cell = document.querySelector('#d' + day + ' div');

    // The red circle
    calendar_cell.style.position = 'absolute';
    calendar_cell.style.height = '100%';
    calendar_cell.style.width = '100%';
    calendar_cell.style['background-color'] = 'rgba(90, 173, 255, 0.3)';
    // calendar_cell.style['color'] = 'rgba(0, 0, 0, 0.7)'; 
    calendar_cell.style['border-radius'] = '50%';
}

circleCurrentDay();