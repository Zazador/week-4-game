$(document).ready(function(){
	var blueValue = Math.floor(Math.random() * (12 - 1)) + 1;
	var purpleValue = Math.floor(Math.random() * (12 - 1)) + 1;
	var greenValue = Math.floor(Math.random() * (12 - 1)) + 1;
	var yellowValue = Math.floor(Math.random() * (12 - 1)) + 1;

	var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

	var wins = 0;
	var losses = 0;

	var currentScore = 0;

	$("#randomNum").text(randomNum);


	$("#blue").click(function() {
  		currentScore += blueValue;
  		$("#totalScore").text(currentScore);

	});

	$("#purple").click(function() {
  		alert(purpleValue);
	});

	$("#green").click(function() {
  		alert(greenValue);
	});

	$("#yellow").click(function() {
  		alert(yellowValue);
	});













});