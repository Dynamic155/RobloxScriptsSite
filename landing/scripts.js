var line = document.querySelector(`#liner`)
const luaUtext = document.querySelector(`#lua`)
const letters = `ABCDEFGHIJKLMNOPQRWSTUVWXYZ%%#@&$∞$@&!%#?”˜›£¦¨©+/=‰‰¤‰¥‘«`;
const audioFolder = "../AudioFX";
const cpuSound = "badCPU.mp3";
const welcomeSound = "welcomeMSG.wav";
const fadeDuration = 7000;

const badCPUaudio = new Audio(`${audioFolder}/${cpuSound}`);
const welcomeMessage = new Audio(`${audioFolder}/${welcomeSound}`);
badCPUaudio.volume = 0.6;

let interval = null;

function fadeAudioPause() {
  const fadeStep = badCPUaudio.volume / (fadeDuration / 1); 
  const fadeInterval = setInterval(() => {
    if (badCPUaudio.volume - fadeStep > 0) {
      badCPUaudio.volume -= fadeStep; 
    } else {
      badCPUaudio.volume = 0; 
      clearInterval(fadeInterval);
      badCPUaudio.pause(); 
    }
  }, 10);
}

badCPUaudio.play()

window.addEventListener("load", () => {
	const heading = document.querySelector("#heading");
	if (heading) {
		let iteration = -2;
		let originalText = heading.innerText;
		clearInterval(interval);

    //text animation
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
			fadeAudioPause()

			if (iteration >= originalText.length) {
				clearInterval(interval);
        //line animation
				setTimeout(() => {
					var frame = 0
					var width = 0
					lineAnimation = setInterval(() => {

						frame++
						width = width + 6
						line.innerHTML = `<hr id="line" style="translate: ${-304 + width/2}px -39px; width: ${width}px;">`
						if (frame > 400 / 4) {
							clearInterval(lineAnimation)
              //luaU animation
							setTimeout(() => {
								var frame = 0;
								var height = 0;
								var opacity = 0;
								luaUAnimation = setInterval(() => {
									frame++
									opacity = opacity + 2
									height = height + 0.13
									luaUtext.innerHTML = `<h3 id="luaU" style="opacity: ${opacity - 170}%; translate: 50px ${-84 + height}px;">LuaU Scripting</h3>`
									welcomeMessage.play()
									if (frame > 150) {
										clearInterval(luaUAnimation)
                    //move text up animation
                    setTimeout(() => {
                      var frame = 0;
                      var hight = 0;
                      var inputOpacity = 0;
                      moveTextUp = setInterval(() => {
                      
                        if (frame > 150) {
                          clearInterval(moveTextUp)
                        }
                      }, 5);
                    }, 500);
									}
								}, 1);
							}, 100);
						}
					}, 5);
				}, 250);
			}

			iteration += 1 / 8; // Use 0.25 to increment by 1/4
		}, 16);

	}
});