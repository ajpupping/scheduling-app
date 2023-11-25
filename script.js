// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var displayDateEl = $('#currentDay');
var saveButton = $('.saveBtn');


function displayDate() {
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    displayDateEl.text(currentDate);
}

displayDate();

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $('.saveBtn').each(function() {
        $(this).on("click", function() {
            var taskText = $(this).siblings('.description').val();
            console.log('text: ' + taskText)
            var taskTime = $(this).parent().attr('id').substring(5);
            console.log('time: ' + taskTime)

            localStorage.setItem(taskText, taskTime);
        });
    });

    function changeColor() {
        var currentHour = dayjs().hour();
        console.log(currentHour);
        
        $(".time-block").each(function () {
            var presentBlock = parseInt($(this).attr("id").substring(5));
            console.log(presentBlock)
            if(presentBlock === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else if(presentBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        });    
    }

    changeColor()

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});