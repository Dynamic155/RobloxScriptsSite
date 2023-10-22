//var dynamicLogo = document.getElementById(`webName`);
//document.getElementById(`startOfheading`).innerText = "</"
//document.getElementById(`endOfheading`).innerText = ">"
//var websiteName = "dynamic";
//var runFrame = setInterval(frame, 100); // Remove the parentheses here
var line = document.querySelector(`#liner`)
const luaUtext = document.querySelector(`#lua`)
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
                width = width + 6
                line.innerHTML = `<hr id="line" style="translate: ${-302 + width/2}px -39px; width: ${width}px;">`
                if (frame > 400/4){
                    clearInterval(runFrame)

                    setTimeout(() => {
                        var height = 0
                        var frame = 0
                        var opacity = 0
                        otherAnimation = setInterval(() => {
                            frame++
                            opacity = opacity + 2
                            height = height + 0.13
                            luaUtext.innerHTML = `<h3 id="luaU" style="opacity: ${opacity - 170}%; translate: 45px ${-84 + height}px;">LuaU Scripting</h3>`

                            if (frame > 150){
                                clearInterval(otherAnimation)
                            }
                        }, 1);
                      }, 100);
                }
            }, 2.5);
          }, 250);
        }
  
        iteration += 1/8; // Use 0.25 to increment by 1/4
      }, 16);
      
    }
  });