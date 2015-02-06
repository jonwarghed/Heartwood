$(document).ready(function()
{
    var heartwoodHappens = moment("2015-08-21 12:00");
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
$(function(){
	var size = 1.6;
	$("#firstline").fitText(size);
	$("#secondline").fitText(size*1.28);
	$("#thirdline").fitText(size*1.38);
	$("#fourthline").fitText(size*1.65);
	$("#fifthline").fitText(size*2.11);
	$("#sixthline").fitText(size*2.06);
	$("#seventhline").fitText(size*2.5);
	$("#eighthline").fitText(size*2.7);
	$("#ninthline").fitText(size*2.85);
	$("#tenthline").fitText(size*2.88);
});
