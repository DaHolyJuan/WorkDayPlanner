//#1set 'current' time to top of page. use moment()

$(document).ready(function (){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
})


//#3update time with color code.
function hourUpdater() {
 var currentHour = moment().hours();
    $(".time-block").each(function() {
        var rowHour = parseInt($(this).attr("id"));
        console.log(rowHour);

        if (rowHour < currentHour){
            $(this).addClass("past");
        } else if (rowHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present");
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("past");
        }
    })
}
hourUpdater();

//#5 Local Storage function to save to html

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})

//save each value so when page refreshes it stays
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));


