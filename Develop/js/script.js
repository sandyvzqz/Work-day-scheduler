//formats the current day of the week, and date using dayjs 
var date = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(date);

// function that insures code isn't run until HTML is finished loading in the browser
$(document).ready(function(){
    // add a listener for click events on the save button
    $('.saveBtn').on("click", function(){
      $(this).css("background-color", "green") 
      var time = $(this).parent().attr("id"); //sets time variable equal to the id of clicked parent element
      var text= $(this).siblings(".description").val(); //sets text variable equal to value of clicked sibling input 
      //saves variables into local storage
      localStorage.setItem(time, text)
    })

  function compareTime(){
    // used MOMENT.JS article for reference here
    // created currentTime variable and set it equal to the the exact hour
    var currentTime = moment().hour();
    //function compares each time-block to currentTime
    $(".time-block").each(function(){
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      if (blockTime < currentTime){
        $(this).addClass("past")
      } else if (blockTime === currentTime){
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }
    })
  }

//functions that get the value of user inputs and saves them in local storage
$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14 .description').val(localStorage.getItem("hour-14"));
$('#hour-15 .description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17 .description').val(localStorage.getItem("hour-17"));
//call function to compare time
compareTime();
});