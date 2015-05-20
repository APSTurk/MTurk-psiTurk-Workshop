$(document).ready(function(){
words=["red","green","blue"];
colors=["red","blue","green"];
counter=-1;
data=[[]];

//PRESENT STIMULUS
$("#b1").click(function(){
$("#b1").hide();
counter++
$("#p1").html(words[counter]);
$("#p1").css("color",colors[counter]);
onsetTime=new Date();
trial=[words[counter],colors[counter]];
});

//COLLECT RESPONSE
$("body").keypress(function(event){
 responseTime = new Date();
 RT=responseTime-onsetTime;
 key=String.fromCharCode(event.which);
 data.push(([trial,RT,key]).join());
 $("#b1").click();
 });
 
});