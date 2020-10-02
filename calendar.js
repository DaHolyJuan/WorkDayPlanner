$(document).ready(function (){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
})

function hourUpdater() {
 var currentHour = moment().hours();
    console.log(currentHour);
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

