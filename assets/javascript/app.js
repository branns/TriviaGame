$(document).ready(function() {
		var index = 0;
//timer set up for start of game and ? answer/not answered/wrong
		var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".mltplChoice").hide();
					showScore();
				}
			}
		}
	};
//variables for score
var correct = 0;
var wrong = 0;
//variables for questions w/answer array
var q1 = {
	question : 'In what country was Frida Kahlo born?',
	possibleAnswers : ['A. Spain',
				 'B. Canada',
				 'C. Mexico',
				 'D. USA'],
//flag directs to correct answer
	flags : [false, false, true, false],
	answer : 'C. Mexico'
};

var q2 = {
	question: 'What body part did Vincent van Gogh lose?',
	possibleAnswers: ['A. Right Toe',
				 'B. Ear',
				 'C. Thumb',
				 'D. Leg'],
	flags : [false, true, false, false],
	answer : 'B. Ear'
};

var q3 = {
	question : 'What was the name of the asylum where van Gogh was admitted?',
	possibleAnswers : ['A. Looney Tunes',
				 'B. Saint-Remy',
				 'C. CoaCoa Puffs',
				 'D. General Hospital'],
	flags : [false, true, false, false],
	answer : 'B. Saint-Remy'
};

var q4 = {
	question : 'What painting is van Gogh most remembered for?',
	possibleAnswers : ['A. Starry Night',
				 'B. The Irises',
				 'C. Green Peacock Moth',
				 'D. The Scream'],
	flags : [true, false, false, false],
	answer : 'A. Starry Night'
};

var q5 = {
	question : 'What was said to be one of Vincent"s favorite drinks?',
	possibleAnswers : ['A. Vodka',
				 'B. Absinthe',
				 'C. Wine',
				 'D. Beer'],
	flags : [false, true, false, false],
	answer : 'B. Absinthe'
};

var q6 = {
	question : 'Between what years did Jackson Pollock create his most famous work?',
	possibleAnswers : ['A. 1947-1950',
				 'B. 1847-1850',
				 'C. 2005-2010',
				 'D. 1970-1975'],
	flags : [true, false, false, false],
	answer : 'A. 1947-1950'
};

var q7 = {
	question : 'What style of painting was Georges Seurat famous for?',
	possibleAnswers : ['A. Lines',
				 'B. Swirls',
				 'C. Dots',
				 'D. Water Color'],
	flags : [false, false, true, false],
	answer : 'C. Dots'
};

var q8 = {
	question : 'What is happening to objects in Salvador Dali"s most famous works?',
	possibleAnswers : ['A. Flying',
				 'B. Melting',
				 'C. Falling',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Melting'
};

var q9 = {
	question : 'Which movement was Pablo Picasso famous for?',
	possibleAnswers : ['A. Impressionism',
				 'B. Imperialism',
				 'C. Dots',
				 'D. Cubist'],
	flags : [false, false, false, true],
	answer : 'D. Cubist'
};

var q10 = {
	question : 'What country was Francisco de Goya from?',
	possibleAnswers : ['A. Turkey',
				  'B. Spain',
				  'C. Brazil',
				  'D. Mexico'],
	flags : [false, true, false, false],
	answer : 'B. Spain'
}
//questions in array
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.mltplChoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

//function imageCorrect(){
//var imgCorrect = ["fkdear.jpeg", "gs1.jpeg", "jp1.jpeg", "pp1.jpg", "sd1.jpeg", "vvg1.jpg", "vvg3.jpg", "vvg5.jpg", "vvg7.jpeg", "vvg9.jpg"];
//var a;
//for(a=0; a<imgCorrect.length; a++);
//	$(".image").html(<img src="");
//}
//function imageWrong(){
//var imgWrong = ["frida_kahlo.jpg", "gs2.jpeg", "jp2.jpeg", "pp2.jpg", "sd2.jpg", "vvg2.jpg", "vvg4.jpg", "vvg6.jpg", "vvg8.jpg", "vvg10.jpg"];
//var b;
//for(b=0; b<imgWrong.length; b++);
//	$(".image").html(imgWrong);
//}
//if answer is correct
function answerCorrect() {
	//imageCorrect();
	correct++;
	alert("Correct!");
	console.log("correct");
}
//if answer wrong
function answerWrong() {
	//imageWrong();
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}
//displaying the score in html
function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//function to set up answer buttons for click function to dertermine by flag array if ? wront/right
setup();
$('.mltplChoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".mltplChoice").hide();
 	showScore();
 }
});
	
});