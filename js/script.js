$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    var typed = new Typed(".typed",{
        strings: ["Computer Engineer", "Web Developer", "Software Engineer", "Student", "Programmer", "Graphics Designer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });
});