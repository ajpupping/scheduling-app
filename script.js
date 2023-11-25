var displayDateEl = $('#currentDay');
var saveButton = $('.saveBtn');

$(function () {

    // function to display date at the top of the page
    function displayDate() {
        var currentDate = dayjs().format('dddd, MMMM D, YYYY');
        displayDateEl.text(currentDate);
    }
    
    displayDate();

    // saves tasks to local storage when user clicks save button
    $('.saveBtn').each(function() {
        $(this).on("click", function() {
            var taskTime = $(this).parent().attr('id').substring(5);
            var taskText = $(this).siblings('.description').val();
            localStorage.setItem(taskTime, taskText);
        });
    });

    // changes color of time block for past/present/future conditions
    function changeColor() {
        var currentHour = dayjs().hour();
        
        $(".time-block").each(function () {
            var presentBlock = parseInt($(this).attr("id").substring(5));
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

    // retrieves data from local storage for each time block 
    $('#hour-9 .description').val(localStorage.getItem('9'));
    $('#hour-10 .description').val(localStorage.getItem('10'));
    $('#hour-11 .description').val(localStorage.getItem('11'));
    $('#hour-12 .description').val(localStorage.getItem('12'));
    $('#hour-13 .description').val(localStorage.getItem('13'));
    $('#hour-14 .description').val(localStorage.getItem('14'));
    $('#hour-15 .description').val(localStorage.getItem('15'));
    $('#hour-16 .description').val(localStorage.getItem('16'));
    $('#hour-17 .description').val(localStorage.getItem('17'));

});