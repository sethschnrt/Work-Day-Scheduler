var currentTime = dayjs().hour();
var saveButton = $(".saveBtn");

var currentDay = dayjs().format("MMMM, DD, YYYY");
document.getElementById("currentDay").textContent = currentDay;

$(function () {
 
  $(".description").each(function () {
    var savedText = localStorage.getItem($(this).attr("id"));
    if (savedText) {
      $(this).val(savedText);
    }
  });


  saveButton.on("click", function () {
    var text = $(this).siblings(".description").val();
    var id = $(this).siblings(".description").attr("id");
    localStorage.setItem(id, text);
  });

  
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentTime) {
      $(this).addClass("past");
    } else if (hour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});
