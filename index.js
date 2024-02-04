//to display winner

function Winner(firstdice, seconddice) {
  if (firstdice > seconddice) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins 🎉";
  } 
  else if(seconddice > firstdice){
    document.querySelector("h1").innerHTML = "🎉 Player 2 wins 🎉";
  }
  else {
    document.querySelector("h1").innerHTML = "Match Tie";
  }
}

//Roll Dice function

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").addEventListener("click", function(){
    RollDice();
  });
});

function RollDice(){
    random_image(imgArray);
    var first = arrayIndex_firstDice();
    var second = arrayIndex_secondDice();
    Winner(first , second);
}


// image random image generator and supplier

var imgArray = ['file:///E:/Web%20Dev/Dice%20game/images/1.png','file:///E:/Web%20Dev/Dice%20game/images/2.png','file:///E:/Web%20Dev/Dice%20game/images/3.png','file:///E:/Web%20Dev/Dice%20game/images/4.png','file:///E:/Web%20Dev/Dice%20game/images/5.png','file:///E:/Web%20Dev/Dice%20game/images/6.png',];

//preloaded images
var preloadedImages = [];
for(var i = 0 ; i < imgArray.length ; i++){
  preloadedImages[i] = new Image();
  preloadedImages[i].src = imgArray[i];
}


function random_image(imgArray){
    var a = Math.floor(Math.random() * imgArray.length);
    document.querySelector("#firstDice").src = preloadedImages[a].src;

    var b = Math.floor(Math.random() * imgArray.length);
    document.querySelector("#secondDice").src = preloadedImages[b].src;
}

//get arry index of image

function arrayIndex_firstDice(){
  var img = document.querySelector("#firstDice").src;
  for(var i = 0; i< imgArray.length ; i++){
    if(imgArray[i] === img){
      return i+1;
    }
  }
}

function arrayIndex_secondDice(){
  var img = document.querySelector("#secondDice").src;
  for(var i = 0; i< imgArray.length ; i++){
    if(imgArray[i] === img){
      return i+1;
    }
  }
}