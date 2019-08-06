$(document).ready(initializeApp); // This line is defining a function that will run once the HTML document loads.

var the_number = null;
var name = null;
var score = 0;

function initializeApp () {
//this is where you need to place the function call for your random number generator function.
//You will also place your clickhandler in here
   the_number = pick_number();
   $("button").on("click", make_guess);
}

function pick_number(){
   var random_number = (Math.floor(Math.random() * 10) + 1);
   return random_number;
}

function make_guess(){
   var the_guess = $("#guess_input").val();
   var parseNum = parseInt(the_guess);
   if(parseNum > the_number){
      $("#response_div").text("Too High!");
      score++;
   } else if(parseNum < the_number){
      $("#response_div").text("Too Low!");
      score++;
   } else if(parseNum === the_number){
      $("#response_div").text("You guessed it!");
      name = prompt("Please enter your name.");
      addScore(name, score);
      getScore();
   } else if(!parseNum){
      $("#response_div").text("Please choose a valid number.");
}
   return parseNum;
}

function getScore(){
   $.ajax({
      url: 'http://localhost:3001/score',
      method: 'get',
      dataType: 'json',
      success: function(response){
        console.log(response);
        for(var scoreIndex = 0; scoreIndex < sortedResponse.length; scoreIndex++){
         var scoreList = $("<div>");
         scoreList.text("name: " + sortedResponse[scoreIndex].name + ", score: " + sortedResponse[scoreIndex].score);
         $(".high_scores").append(scoreList);
       }
      },
      error: function(){
        console.log('error');
      }
    })
}

function addScore(name, score){
   $.ajax({
      url: 'http://localhost:3001/addscore',
      method: 'get',
      dataType: 'json',
      data: {
         name, score
      },
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log('error');
      }
    })
}
