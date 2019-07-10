$(document).ready(initializeApp); // This line is defining a function that will run once the HTML document loads.

var the_number = null;

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
   } else if(parseNum < the_number){
      $("#response_div").text("Too Low!");
   } else if(parseNum === the_number){
      $("#response_div").text("You guessed it!");
   } else if(!parseNum){
      $("#response_div").text("Please choose a valid number.");
}
   return parseNum;
}
