window.addEventListener('DOMContentLoaded', function() {
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
                calculateQuote(initial, final); 
            } else {
                alert('No dates stored');
            }
    }})
});


    // let finalDate = getDateOne();
    // console.log(finalDate, 'finaldate');
    // let finalDate = getDateTwo(initialDate);
    // // calculateQuote(initialDate, finalDate);
    // let clicks = 0;
    
    // document.addEventListener(keydown, function() {
    //     if (clicks == 0){
    //         console.log('oneclick')
    //     } else{
    //         console.log('otherclicks', clicks)
    //     }
    //     ++clicks;
    // });



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
        // let finalDate = getDateTwo(dateOne);
        // return finalDate;
    // })
    // return dateOne;
}


function getDateTwo(click) {
    click++
    let button = document.getElementById('quote-button');
    let dateTwo = 'A';
    // dateTwo = button.addEventListener('click', function() {
        console.log('clicked second time!');
        dateTwo = new Date(myCalender.value.toDateString())
        console.log(dateTwo, 'datetwo');
        return dateTwo;
        // let finalDate = getDateTwo(dateOne);
        // return finalDate;
    // })
    // return dateOne;
}


// // gets final date
// function getDateTwo (dateOne) {
//     console.log('getDateTwoCalled,', dateOne, '= dateOnefrom2')

//     button.addEventListener('click', function(dateOne) {
//         alert(`Hello ${dateOne}`)
//         let endDate = myCalender.value;
//         let dateTwo = new Date(endDate);
//         console.log(dateTwo, 'datetwo')
//         return this.dateTwo;
//     })
// }

// function secondDate (dateOne){
//     if (dateOne) {
            
//         button.addEventListener('click', function(dateOne) {
//             alert(`Hello ${dateOne}`)
//             let endDate = myCalender.value;
//             let dateTwo = new Date(endDate);
//             console.log(dateTwo, 'datetwo')
//             return this.dateTwo;
//         }) 
//     } console.log (dateTwo);
// }

// should compare two and return difference in days
function calculateQuote(initialDate, finalDate) {
    console.log('calculateQuoteCalled')
    // let results = document.getElementById('results');
    console.log(initialDate, finalDate, 'Ini Fin')
    var Difference_In_Time = finalDate.getTime() - initialDate.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    results.classList.replace('hidden', 'show');
    results.textContent = `
    Total days = ${Difference_In_Days}
    `
    console.log(Difference_In_Days, 'difference in days');
}

const myCalender = new CalendarPicker('#myCalendarWrapper', {
    // options here
});

// geeks for geeks Date comparison
	// JavaScript program to illustrate
	// calculation of no. of days between two date

	// To set two dates to two variables
// 	var date1 = new Date("06/30/2019");
// var date2 = new Date("07/30/2019");

// // To calculate the time difference of two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();

// // To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// //To display the final no. of days (result)
// document.write("Total number of days between dates <br>"
// 			+ date1 + "<br> and <br>"
// 			+ date2 + " is: <br> "
// 			+ Difference_In_Days);





// const currentDateElement = document.getElementById('current-date');
// currentDateElement.textContent = myCalender.value;

// const currentDayElement = document.getElementById('current-day');
// currentDayElement.textContent = myCalender.value.getDay();

// const currentToDateString = document.getElementById('current-datestring');
// currentToDateString.textContent = myCalender.value.toDateString();