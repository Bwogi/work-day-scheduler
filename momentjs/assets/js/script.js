const momentConverted = moment(
    "05/27/2019 13:00:00",
    "MM/DD/YYYY HH:mm:ss"
);
// console.log(momentConverted);
// $("#formatTime").append(`<p>Converted: ${momentConverted}</p>`);
$("#formatTime").append(
    `<p>Converted 2 : ${momentConverted.format("MM/DD/YY")}</p>`
);
$("#formatTime").append(
    momentConverted.format("MMM Do, YYYY hh:mm:ss a")
);