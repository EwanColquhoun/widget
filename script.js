window.addEventListener('DOMContentLoaded', function() {
    let initialDate = getDateOne();
    let finalDate = getDateTwo(initialDate);
    calculateQuote(initialDate, finalDate);
});

// gets intial date
function getDateOne() {
    let button = document.getElementById('quote-button');
    let results = document.getElementById('results');
    button.addEventListener('click', function() {
        console.log('clicked!')
        results.textContent = `
        Here is the selected date: ${myCalender.value.toDateString()}`
        results.classList.replace('hidden', 'show');
        let dateOne = new Date(myCalender.value.toDateString())
        console.log(dateOne, 'dateone')
        return dateOne;
    })
    return dateOne
}

// gets final date
function getDateTwo (dateOne) {
    console.log('getDateTwoCalled,', dateOne, '= dateOne')

    button.addEventListener('onChange', function(dateOne) {
        let endDate = myCalender.value;
        let dateTwo = new Date(endDate);
        console.log(dateTwo, 'datetwo')
    })
}

// should compare two and return difference in days
function calculateQuote(initialDate, finalDate) {
    console.log('calculateQuoteCalled')
    let results = document.getElementById('results');
    var Difference_In_Time = initialDate.getTime() - finalDate.getTime();
    
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    results.textContent = `
    Total days = ${Difference_In_Days}
    `
    console.log(Difference_In_Days);
}

const myCalender = new CalendarPicker('#myCalendarWrapper', {
    // options here
});

// geeks for geeks Date comparison
	// JavaScript program to illustrate
	// calculation of no. of days between two date

	// To set two dates to two variables
	var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
document.write("Total number of days between dates <br>"
			+ date1 + "<br> and <br>"
			+ date2 + " is: <br> "
			+ Difference_In_Days);





const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = myCalender.value;

const currentDayElement = document.getElementById('current-day');
currentDayElement.textContent = myCalender.value.getDay();

const currentToDateString = document.getElementById('current-datestring');
currentToDateString.textContent = myCalender.value.toDateString();