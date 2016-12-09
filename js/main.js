//Amanda Ong (ayo3)
//Slide show variables
var index = 0;


// Change image when next/back button is pressed
function nextBtnPressed(n) {
    index += n;
    change_image();
}

function change_image() {
    "use strict";
    var pictures = ["monk.jpg", "pagoda.jpg", "boat.jpg", "girls.jpg"];
    var displayed_image = document.getElementById('myanmar_image');

    //If currently on first image & back btn pressed, wrap around to last image
    if (index < 0) {
        index = pictures.length-1;
        displayed_image.src = 'images/' + pictures[index];
    }
    //If slideshow currently on last image & forwad btn pressed, wrap around to first image
    else if (index >= pictures.length) {
        index = 0;
        displayed_image.src = 'images/' + pictures[index];
    }
    //Else, display image based on index value (i.e. if (index < pictures.length))
    else {
        displayed_image.src = 'images/' + pictures[index];
    } 
}

//Show date
window.onload = function get_date() {
    "use strict";
    // Date variables
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        
        // Today's month, date, and year
        date = new Date(),
        month = monthNames[date.getMonth()],
        todays_date = date.getDate(),
        year = date.getFullYear(),
        
        // Set up the date as a text object
        span = document.createElement('span'),
        date_text = document.createTextNode(todays_date + ' ' + month + ', ' + year),
        footer = document.getElementsByTagName('footer')[0]; //position references the first footer (index 0)in html doc   
    
    // Add date to footer
    span.appendChild(date_text);
    footer.appendChild(span);
};


