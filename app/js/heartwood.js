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
	$("#firstline").fitText(size*0.98);
	$("#secondline").fitText(size*1.33);
	$("#thirdline").fitText(size*1.49);
	$("#fourthline").fitText(size*1.85);
	$("#fifthline").fitText(size*2.5);
	$("#sixthline").fitText(size*2.5);
	$("#seventhline").fitText(size*3.1);
	$("#eighthline").fitText(size*3.5);
	$("#ninthline").fitText(size*3.8);
	$("#tenthline").fitText(size*4);
});
