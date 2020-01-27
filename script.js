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
    let btn = $("button");
    let txt = $("textarea");
    let seven = txt.attr("class", "sevenAM");
    let eight = txt.attr("class", "eightAM");
    let nine = txt.attr("class", "nineAM");
    let ten = txt.attr("class", "tenAM");
    let eleven = txt.attr("class", "elevenAM");
    let twelve = txt.attr("class", "twelvePM");
    let one = txt.attr("class", "onePM");
    let two = txt.attr("class", "twoPM");
    let three = txt.attr("class", "threePM");
    let four = txt.attr("class", "fourPM");
    let five = txt.attr("class", "fivePM");
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
    btn.attr("class", "sevenAM").on("click", function(){
        localStorage.setItem("7AM", seven.val());
    })
    btn.attr("class", "eightAM").on("click", function(){
        localStorage.setItem("8AM", eight.val());
    })
    btn.attr("class", "nineAM").on("click", function(){
        localStorage.setItem("9AM", nine.val());
    })
    btn.attr("class", "tenAM").on("click", function(){
        localStorage.setItem("10AM", ten.val());
    })
    btn.attr("class", "elevenAM").on("click", function(){
        localStorage.setItem("11AM", eleven.val());
    })
    btn.attr("class", "twelvePM").on("click", function(){
        localStorage.setItem("12PM", twelve.val());
    })
    btn.attr("class", "onePM").on("click", function(){
        localStorage.setItem("1PM", one.val());
    })
    btn.attr("class", "twoPM").on("click", function(){
        localStorage.setItem("2PM", two.val());
    })
    btn.attr("class", "threePM").on("click", function(){
        localStorage.setItem("3PM", three.val());
    })
    btn.attr("class", "fourPM").on("click", function(){
        localStorage.setItem("4PM", four.val());
    })
    btn.attr("class", "fivePM").on("click", function(){
        localStorage.setItem("5PM", five.val());
    })
});