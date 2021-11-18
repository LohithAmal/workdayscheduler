// Document Ready
$(document).ready(() => {
  let hour = moment().get("hour");
  $(".hour").each(function () {
    let currentTime = parseInt($(this).attr("value"));
    // console.log(currentTime);
    if (currentTime < hour) {
      $(this).addClass("past");
    }
    if (currentTime === hour) {
      $(this).addClass("present");
    }
    if (currentTime > hour) {
      $(this).addClass("future");
    }
  });
  // Display current date
  $("#currentDay").text(moment().format("dddd MMMM D, YYYY"));

  // Time blocks change color based on hour of day

  // Variable to declare all time blocks
  let eventOn = document.querySelectorAll(".event");

  // forEach loop to save event input
  eventOn.map((deed, day) => {
    const input = deed.querySelector("textarea");
    const saveBtn = deed.querySelector("button");
    input.value = localStorage.getItem("deed-" + (day + 1));

    // eventlistener
    saveBtn.addEventListener("click", () => {
      localStorage.setItem(day + 1 + "deed-", input.value);
    });
  });
});
