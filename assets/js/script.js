// const { parseTwoDigitYear } = require("moment");

var saveBtnEl = document.querySelector('.saveBtn');
var currentDayEl = document.querySelector("#currentDay");

// DOM header day date addition
var timeNow = moment().format('LLLL');
console.log(timeNow)
$("#currentDay").text(timeNow);

// what is the time now(hourly)?
var checkTime = moment().hour();
console.log(checkTime);

// indicate current time on calendar 
$(".time-block").each(function() {
    var hourBlock = $(this).attr("id");
    if (hourBlock == checkTime) {
        $(this).addClass("present");
        $(this).remove("past");
        $(this).remove("future");
    } else if (hourBlock < checkTime) {
        $(this).addClass("past");
        $(this).remove("future");
        $(this).remove("present");
    } else if (hourBlock > checkTime) {
        $(this).addClass("future");
        $(this).remove("past");
        $(this).remove("present");
    }

})

// Save the day's date? 
var checkDate = moment().format('L');
console.log(checkDate);
localStorage.setItem("savedDate", checkDate);



// check if calendar has changed from one day to another 
var dateInStorage = localStorage.getItem("savedDate");

if (checkDate != dateInStorage) {
    localStorage.clear();
}





// when button is clicked