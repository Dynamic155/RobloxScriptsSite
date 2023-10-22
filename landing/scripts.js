//var dynamicLogo = document.getElementById(`webName`);
//document.getElementById(`startOfheading`).innerText = "</"
//document.getElementById(`endOfheading`).innerText = ">"
//var websiteName = "dynamic";
//var runFrame = setInterval(frame, 100); // Remove the parentheses here

const letters = `ABCDEFGHIJKLMNOPQRWSTUVWXYZ%%#@&$∞$@&!%#?”˜›£¦¨©+/=‰‰¤‰¥‘«`;

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = -2;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 4;
  }, 30);
}