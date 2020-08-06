var sequence = [];
var blocks = ["green","red","yellow","blue"];
var usersequence =[];
var start = true;
var i=0;
$(document).keypress(function(){
  if(start){
    start=false;
    generator();
  };
});
function generator(){
  $("h1").text("Level " + (sequence.length+1));
  var randomNumber = Math.floor(Math.random() * 4);
  sequence.push(blocks[randomNumber]);
  $("." + blocks[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
};

$(".btn").click(function(e){
    usersequence.push(e.target.classList[1]);
    checkanswer(usersequence.length-1);
  });

function checkanswer(i){
  if(usersequence[i]===sequence[i]){
    if(usersequence.length===sequence.length){
      usersequence =[];
      generator();
    }
  }
  else{
    $("h1").text("Game Over, Press Any Key to Restart");
    gameover();
  }
}

function gameover(){
  usersequence =[];
  sequence =[];
  start = true;
}
