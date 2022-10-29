window.addEventListener('DOMContentLoaded', function() {
    getQuote();
});


function getQuote() {
    let button = document.getElementById('quote-button');
    let results = document.getElementById('results');
    button.addEventListener('click', function() {
        console.log('clicked!')
        results.classList.replace('hidden', 'show');
    })
}
const myCalender = new CalendarPicker('#myCalendarWrapper', {
    // options here
});