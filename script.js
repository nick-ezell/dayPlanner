$(document).ready(function () {
    //Getting date and dynamically updating
    let dateTime = null,
        date = null;
    let update = function () {
        date = moment(new Date())
        dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss A'));
    };
    dateTime = $('header')
    update();
    setInterval(update, 1000);
    //Declaring variables
    let seven = $("#sevenAM");
    let eight = $("#eightAM");
    let nine = $("#nineAM");
    let ten = $("#tenAM");
    let eleven = $("#elevenAM");
    let twelve = $("#twelvePM");
    let one = $("#onePM");
    let two = $("#twoPM");
    let three = $("#threePM");
    let four = $("#fourPM");
    let five = $("#fivePM");
    //Retrieving set values for each hour
    seven.text(localStorage.getItem("7AM"));
    eight.text(localStorage.getItem("8AM"));
    nine.text(localStorage.getItem("9AM"));
    ten.text(localStorage.getItem("10AM"));
    eleven.text(localStorage.getItem("11AM"));
    twelve.text(localStorage.getItem("12PM"));
    one.text(localStorage.getItem("1PM"));
    two.text(localStorage.getItem("2PM"));
    three.text(localStorage.getItem("3PM"));
    four.text(localStorage.getItem("4PM"));
    five.text(localStorage.getItem("5PM"));
    //Click events for setting each hour to storage
    $("#clear").on("click", function(){
        localStorage.clear("7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM");
    });
    $(".sevenAM").on("click", function(){
        localStorage.setItem("7AM", seven.val());
    });
    $(".eightAM").on("click", function(){
        localStorage.setItem("8AM", eight.val());
    });
    $(".nineAM").on("click", function(){
        localStorage.setItem("9AM", nine.val());
    });
    $(".tenAM").on("click", function(){
        localStorage.setItem("10AM", ten.val());
    });
    $(".elevenAM").on("click", function(){
        localStorage.setItem("11AM", eleven.val());
    });
    $(".twelvePM").on("click", function(){
        localStorage.setItem("12PM", twelve.val());
    });
    $(".onePM").on("click", function(){
        localStorage.setItem("1PM", one.val());
    });
    $(".twoPM").on("click", function(){
        localStorage.setItem("2PM", two.val());
    });
    $(".threePM").on("click", function(){
        localStorage.setItem("3PM", three.val());
    });
    $(".fourPM").on("click", function(){
        localStorage.setItem("4PM", four.val());
    });
    $(".fivePM").on("click", function(){
        localStorage.setItem("5PM", five.val());
    });
});