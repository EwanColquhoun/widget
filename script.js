window.addEventListener('DOMContentLoaded', function() {
    setUp();
});

function setUp(){
    let initial = 0;
    let final = 0;
    let click=0
    this.document.addEventListener('click', function(){
        click++;
        if (click <= 1){
            initial = getDateOne(click);
            console.log(initial, 'initial')
        } else if (click >=1) {
            final = getDateTwo(click);
            console.log(final, 'final')
            if (initial !=0 && final !=0 ) {
                console.log(initial, final, 'I & F')
                console.log(click, 'click count')
                let length = calculateLength(initial, final); 
                calculateQuote(length);
                quoteButton();
            } else {
                alert('No dates stored');
            }
    }})
}


// gets intial date
function getDateOne(click) {
    let button = document.getElementById('quote-button');
    let results = document.getElementById('results');
    let dateOne = 'A';
    // dateOne = button.addEventListener('click', function() {
        click++;
        console.log('clicked!')
        results.textContent = `
        Here is the selected date: ${myCalender.value.toDateString()}
        <br> Clicks = ${click}`
        results.classList.replace('hidden', 'show');
        dateOne = new Date(myCalender.value.toDateString())
        console.log(dateOne, 'dateone');
        return dateOne;
}

// Gets second date
function getDateTwo(click) {
    click++
    let dateTwo = 'A';
        console.log('clicked second time!');
        dateTwo = new Date(myCalender.value.toDateString())
        console.log(dateTwo, 'datetwo');
        return dateTwo;
}


// Calculates the number of days
function calculateLength(initialDate, finalDate) {
    console.log('calculateLengthCalled')
    console.log(initialDate, finalDate, 'Ini Fin')
    var Difference_In_Time = finalDate.getTime() - initialDate.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    results.classList.replace('hidden', 'show');
    results.textContent = `
    Total days = ${Difference_In_Days}
    `
    console.log(Difference_In_Days, 'difference in days');
    return Difference_In_Days
}


// Works out cost and applys discount
function calculateQuote(length){
    let dayRate = 29;

    let total = dayRate * length

    results.innerHTML = `
    <p>Total Price = <strong>£ ${total}</strong></P>
    <button id="quote-button-final">Call for availability!</button>
    `
}

function quoteButton(){
    let quoteButton = document.getElementById('quote-button-final');
    quoteButton.addEventListener('click', function(){
        alert('Call Jezza on 1800 KITCHENS!');
    })
}
const myCalender = new CalendarPicker('#myCalendarWrapper', {
    // options here
});
