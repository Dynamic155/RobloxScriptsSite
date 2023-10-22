//var dynamicLogo = document.getElementById(`webName`);
//document.getElementById(`startOfheading`).innerText = "</"
//document.getElementById(`endOfheading`).innerText = ">"
//var websiteName = "dynamic";
//var runFrame = setInterval(frame, 100); // Remove the parentheses here
var line = document.querySelector(`#liner`)
const letters = `ABCDEFGHIJKLMNOPQRWSTUVWXYZ%%#@&$∞$@&!%#?”˜›£¦¨©+/=‰‰¤‰¥‘«`;

let interval = null;

window.addEventListener("load", () => {
    const heading = document.querySelector("#heading");
    if (heading) {
      let iteration = -2;
      let originalText = heading.innerText;
      clearInterval(interval);
  
        interval = setInterval(() => {
        heading.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
  
        if (iteration >= originalText.length) {
          clearInterval(interval);
          setTimeout(() => {
            var frame = 0
            var width = 0
            runFrame = setInterval(() => {
                
                frame++
                width = width + 2
                line.innerHTML = `<hr id="line" style="translate: ${-302 + width/2}px -42px; width: ${width}px;">`
                if (frame > 300){
                    clearInterval(runFrame)

                    setTimeout(() => {
                        var frame = 0
                        runFrame = setInterval(() => {
                            frame++

                            if (frame > 300){
                                clearInterval(runFrame)
                            }
                        }, 5);
                      }, 250);
                }
            }, 5);
          }, 250);
        }
  
        iteration += 1/8; // Use 0.25 to increment by 1/4
      }, 20);
      
    }
  });