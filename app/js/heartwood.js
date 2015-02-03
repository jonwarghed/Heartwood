$(document).ready(function()
{
    var heartwoodHappens = moment("2015-02-15 18:00");
    console.log(heartwoodHappens);
    var now = moment();
    console.log(now);
    var difference = heartwoodHappens.diff(now,"seconds");
    console.log(difference);
    var clock = $('.your-clock').FlipClock(difference,{
        clockFace: 'DailyCounter',
        countdown : true,
        showSeconds : true
    });
})