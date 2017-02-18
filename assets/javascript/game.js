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
  		checkScore();
	});

	$("#purple").click(function() {
  		currentScore += purpleValue;
  		$("#totalScore").text(currentScore);
  		checkScore();
	});

	$("#green").click(function() {
  		currentScore += greenValue;
  		$("#totalScore").text(currentScore);
  		checkScore();
	});

	$("#yellow").click(function() {
  		currentScore += yellowValue;
  		$("#totalScore").text(currentScore);
  		checkScore();
	});


	//Function to check if game is won
	function checkScore() {
		console.log("Current Score: " + currentScore);
		if (currentScore === randomNum) {
			gameWin();
		} else if (currentScore < randomNum) {

		} else {
			gameLose();
		}
	}

	//Function to handle a user winning the game
	function gameWin() {
		wins++;
		$("#wins").text(wins);

		blueValue = Math.floor(Math.random() * (12 - 1)) + 1;
		purpleValue = Math.floor(Math.random() * (12 - 1)) + 1;
		greenValue = Math.floor(Math.random() * (12 - 1)) + 1;
		yellowValue = Math.floor(Math.random() * (12 - 1)) + 1;

		randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

		currentScore = 0;

		$("#randomNum").text(randomNum);
		$("#totalScore").text(currentScore);
	}

	//Function to handle a user losing the game
	function gameLose() {
		losses++;
		$("#losses").text(losses);

		blueValue = Math.floor(Math.random() * (12 - 1)) + 1;
		purpleValue = Math.floor(Math.random() * (12 - 1)) + 1;
		greenValue = Math.floor(Math.random() * (12 - 1)) + 1;
		yellowValue = Math.floor(Math.random() * (12 - 1)) + 1;

		randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

		currentScore = 0;

		$("#randomNum").text(randomNum);
		$("#totalScore").text(currentScore);
	}













});