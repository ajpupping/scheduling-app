# Work Day Scheduling App

## Description

The [Work Day Scheduling App](https://ajpupping.github.io/scheduling-app/) is a calendar web applicaton which allows users to save daily events to a schedule. The purpose of this project was to create an interactive site which stores and retrieves user input data. 

I learned how to use [Day.js](https://day.js.org/docs/en/get-set/hour) to retrieve and display date and time data. I also learned how to traverse the DOM with javascript, in order to select elements. I was able to use local storage to store and retrieve persistent user data. 

## Usage 

The scheduling app uses color to indicate the current hour of the day. Red indicates the current time block. A gray time block indicates this time has already past. Green indicates a future block of time. 

![A screenshot of the scheduling app, with empty time blocks](/images/schedule-app-screenshot-2.png)

The user can enter their daily tasks by typing in the empty time blocks. Clicking the save button on the right will save the data in each individual block. To clear the data, simply delete the text content, click save, and refresh the page. 

![A screenshot of the scheduling app with several sample tasks listed](/images/schedule-app-screenshot-1.png)


## Credits

I used [this website](https://blog.logrocket.com/localstorage-javascript-complete-guide/) to learn more about using local storage. 

[This site](https://zellwk.com/blog/dom-traversals/) helped me understand more about DOM traversal. 

I also used [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to learn about parsing integers and extracting numbers from a string, and [this site](https://www.w3schools.com/jsref/jsref_substring.asp) to learn about the substring method. 