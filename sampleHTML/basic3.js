$(document).ready(function(){

$("body").keypress(function(event){
 d = new Date();
 $("#p1").html(d.getTime()); 
 $("#p1").append(" " + String.fromCharCode(event.which));
 });
});