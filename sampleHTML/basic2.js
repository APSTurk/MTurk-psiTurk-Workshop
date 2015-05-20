$(document).ready(function(){

	words=["red","green","blue"];
	colors=["red","blue","green"];
	counter=-1;	

	$("#b1").click(function(){
		counter++
		$("#p1").html(words[counter]);
		$("#p1").css("color",colors[counter]);
	});
});