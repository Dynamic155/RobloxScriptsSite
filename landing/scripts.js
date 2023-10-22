var dynamicLogo = document.getElementById(`heading`);
var websiteName = "dynamic";
var glitchyCharacters = ["$", "@", "&", "!", "%", "#", "?", "Δ", "Θ", "Λ", "Ξ", "Π", "Σ", "Φ", "Ψ", "Ω", "+", "/", "=", "<", ">", "≠", "≤", "≥", "∞", "∑", "∫", "∆"];
var runFrame = setInterval(frame, 100); // Remove the parentheses here

// clearInterval(intervalId);
var cutFrame = 0
function frame() {
    if (cutFrame <= 100) {
        randomCharacter()
        cutFrame++
    } else  {
        clearInterval(runFrame);
    }
    console.log(cutFrame)
}

function randomCharacter() {
  var randomIndex = Math.floor(Math.random() * glitchyCharacters.length);
  var character = glitchyCharacters[randomIndex];
  changeCharacter(character);
}

function changeCharacter(character) {
  var newHeadingText = "";
  for (var i = 0; i < websiteName.length; i++) {
    var originalCharacter = websiteName.charAt(i);
    if (glitchyCharacters.includes(originalCharacter)) {
      newHeadingText += originalCharacter;
    } else {
      newHeadingText += character;
    }
  }
  renderHeading(newHeadingText);
}

function renderHeading(headingText) {
  dynamicLogo.innerText = headingText;
}