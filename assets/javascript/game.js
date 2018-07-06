var timer = 90;
var intervalId;
var playerSelection;
var correct = 0;
var incorrect = 0;
var QAs = {
  Q1 : "false" ,
  Q2 : "true" ,
  Q3 : "false" , 
  Q4 : "false" ,
  Q5 : "true"
}
var answers = ["false" , "true" , "false" , "false" , 
"true"]


function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    timer--;

    $(".timer-text").html("Time Left: " + timer);

    if (timer === 0) {

      stop();

      alert("Time's Up!");

      alert("You got " + correct + " correct.")
 
    }
  }

  function stop() {

    clearInterval(intervalId);
  }

  run();

  $(".q1").on("click" , function(){
    playerSelection= $('input[name="answer1"]:checked').val();
    console.log(playerSelection);
    if (playerSelection === answers[0]) {
      correct++
      console.log("correct: " + correct);
    }

    else {
      incorrect++
      console.log("incorrect " + incorrect);
    };
  });

  $(".q2").on("click" , function(){
    playerSelection= $('input[name="answer2"]:checked').val();
    console.log(playerSelection);
    if (playerSelection === answers[1]) {
      correct++
      console.log("correct: " + correct);
    }

    else {
      incorrect++
      console.log("incorrect " + incorrect);
    };
  });

  $(".q3").on("click" , function(){
    playerSelection= $('input[name="answer3"]:checked').val();
    console.log(playerSelection);
    if (playerSelection === answers[2]) {
      correct++
      console.log("correct: " + correct);
    }

    else {
      incorrect++
      console.log("incorrect " + incorrect);
    };
  });

  $(".q4").on("click" , function(){
    playerSelection= $('input[name="answer4"]:checked').val();
    console.log(playerSelection);
    if (playerSelection === answers[3]) {
      correct++
      console.log("correct: " + correct);
    }

    else {
      incorrect++
      console.log("incorrect " + incorrect);
    };
  });

  $(".q5").on("click" , function(){
    playerSelection= $('input[name="answer5"]:checked').val();
    console.log(playerSelection);
    if (playerSelection === answers[4]) {
      correct++
      console.log("correct: " + correct);
    }

    else {
      incorrect++
      console.log("incorrect " + incorrect);
    };
  });
