var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
var randomChosenColour = buttonColours[nextSequence()];
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
gamePattern.push(randomChosenColour);
var $element = $("#" + randomChosenColour);


$element.animate({ opacity: 0.1 }, 500)
        .animate({ opacity: 1 }, 500);
