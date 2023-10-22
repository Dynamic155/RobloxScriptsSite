var dynamicLogo = document.getElementById(`heading`);
var websiteName = "dynamic";
var glitchyCharacters = ["$", "@", "&", "!", "%", "#", "?", "Δ", "Θ", "Λ", "Ξ", "Π", "Σ", "Φ", "Ψ", "Ω", "+", "/", "=", "<", ">", "≠", "≤", "≥", "∞", "∑", "∫", "∆"];
//var runFrame = setInterval(frame, 1000); // Remove the parentheses here

var cutFrame = 0
function frame() {
    if (cutFrame < 20) {
        changeCharacter()
        cutFrame++
    } else  {
        clearInterval(runFrame);
        dynamicLogo.innerText = websiteName
    }
}

function randomCharacter() {
    var randomIndex = Math.floor(Math.random() * glitchyCharacters.length);
    var character = glitchyCharacters[randomIndex];
    return character
}

function changeCharacter() {
  var newHeadingText = [];
  console.log(websiteName.length)
  for (let i = 0; i < websiteName.length; i++) {
    const ele = randomCharacter()
    newHeadingText.push(ele)
    console.log(ele)
  }
  console.log(newHeadingText)
  var finalText = "";
  for (let i = 0; i < newHeadingText.length; i++) {
    const element = newHeadingText[i];
    finalText = finalText + element
  }
  renderHeading(finalText);
}

function renderHeading(headingText) {
  dynamicLogo.innerText = headingText;
}