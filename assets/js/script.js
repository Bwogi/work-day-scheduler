var saveBtnEl = document.querySelector('.saveBtn');
var currentDayEl = document.querySelector("#currentDay");

// DOM header day date addition
var timeNow = moment().format('LLLL');
console.log(timeNow);
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
        $(this).find("textarea").attr("disabled", true);
        $(this).find("button").attr("disabled", true);
    } else if (hourBlock > checkTime) {
        $(this).addClass("future");
        $(this).remove("past");
        $(this).remove("present");
    }

});

// recall the day 's event events from local storage 
// Save the day's date? 
var checkDate = moment().format('L');
console.log(checkDate);
localStorage.setItem("savedDate", checkDate);

// check if calendar has changed from one day to another 
var dateInStorage = localStorage.getItem("savedDate");

if (checkDate != dateInStorage) {
    localStorage.clear();
} else {
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}


// enter today's events and save them to local storage 
$(".saveBtn").on('click', function(e) {
    e.preventDefault();
    var theTimeInBlock = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val().trim();
    console.log(description)
    localStorage.setItem(theTimeInBlock, description);
});