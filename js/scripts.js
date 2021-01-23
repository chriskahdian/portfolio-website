$('#home').addClass("active");

$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top-66
    }, 1000);
    return false;
});

$("#aboutLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-115
    }, 1000);
    return false;
});

$("#portfolioLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top-115
    }, 1000);
    return false;
});

$("#contactLink").click(function() {
    // $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $("#contact").offset().top-115
    }, 1000);
    return false;
});



// this stuff down here doesn't work lol

// $('#about').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#aboutLink").addClass("active");
// }, { offset: 101 });

// $('#portfolio').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#portfolioLink").addClass("active");
// }, { offset: 101 });

// $('#contact').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#contactLink").addClass("active");
// }, { offset: 101 });

// $('#home').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#homeLink").addClass("active");
// }, { offset: 0 });