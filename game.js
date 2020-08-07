var sequence = [];
var blocks = ["green","red","yellow","blue"];
var usersequence =[];
var start = true;
var i=0;
$(document).click(function(){
  $(".instruction").css("display","none");
  if(start){
    start=false;
    generator();
  };
});
function generator(){
  $("h1").text("Level " + (sequence.length+1));
  var randomNumber = Math.floor(Math.random() * 4);
  sequence.push(blocks[randomNumber]);
  setTimeout(function(){ $("." + blocks[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100); }, 1000);
};

$(".btn").click(function(e){
  playsound("sounds/" + e.target.classList[1] + ".mp3");
  if(!start){
    usersequence.push(e.target.classList[1]);
    checkanswer(usersequence.length-1);
  }
  });

function checkanswer(i){
  if(usersequence[i]===sequence[i]){
    if(usersequence.length===sequence.length){
      usersequence =[];
      generator();
    }
  }
  else{
    playsound("sounds/wrong.mp3")
    $("h1").text("Game Over, Click on screen to Restart");
    setTimeout(function(){ gameover(); }, 10);
  }
}

function gameover(){
  usersequence =[];
  sequence =[];
  start = true;
}
function playsound(url){
  var sound = new Audio(url);
  sound.play();
}
