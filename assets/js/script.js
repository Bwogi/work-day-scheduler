// current day 
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(today)
var currentDayEl = document.getElementById('currentDay');
// console.log(currentDayEl)
currentDayEl.textContent = now;