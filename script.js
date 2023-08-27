const qBtn = document.getElementById("Q");
wBtn = document.getElementById("W");
eBtn = document.getElementById("E");
aBtn = document.getElementById("A");
sBtn = document.getElementById("S");
dBtn = document.getElementById("D");
zBtn = document.getElementById("Z");
xBtn = document.getElementById("X");
cBtn = document.getElementById("C");

// const soundSnippets = document.querySelector(`audio`[data-key="${e.keyCode}"]`),
//   pressed = document.querySelector(`.pressed[data-key="${e.keyCode}]`);

// const soundSnippets = document.querySelector(`audio[data-key="${e.keyCode}"]`),
//   pressed = document.querySelector(`.pressed[data-key="${e.keyCode}"]`);
// if (!pressed) return;

//!long-method
var audio1 = document.getElementById("sound1");
var audio2 = document.getElementById("sound2");
var audio3 = document.getElementById("sound3");
var audio4 = document.getElementById("sound4");
var audio5 = document.getElementById("sound5");
var audio6 = document.getElementById("sound6");
var audio7 = document.getElementById("sound7");
var audio8 = document.getElementById("sound8");
var audio9 = document.getElementById("sound9");

document.body.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "q") {
    audio1.currentTime = 0;
    audio1.play();
    qBtn.classList.add("glow");
    qBtn.classList.add("changeColor");

    setTimeout(() => {
      qBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "w") {
    audio2.currentTime = 0;
    audio2.play();
    wBtn.classList.add("glow");
    wBtn.classList.toggle("changeColor");
    setTimeout(() => {
      wBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "e") {
    audio3.currentTime = 0;
    audio3.play();
    eBtn.classList.add("glow");
    eBtn.classList.toggle("changeColor");
    setTimeout(() => {
      eBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "a") {
    audio4.currentTime = 0;
    audio4.play();
    aBtn.classList.add("glow");
    aBtn.classList.toggle("changeColor");
    setTimeout(() => {
      aBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "s") {
    audio5.currentTime = 0;
    audio5.play();
    sBtn.classList.add("glow");
    sBtn.classList.toggle("changeColor");
    setTimeout(() => {
      sBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "d") {
    audio6.currentTime = 0;
    audio6.play();
    dBtn.classList.add("glow");
    dBtn.classList.toggle("changeColor");
    setTimeout(() => {
      dBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "z") {
    audio7.currentTime = 0;
    audio7.play();
    zBtn.classList.add("glow");
    zBtn.classList.toggle("changeColor");
    setTimeout(() => {
      zBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "x") {
    audio8.currentTime = 0;
    audio8.play();
    xBtn.classList.add("glow");
    xBtn.classList.toggle("changeColor");
    setTimeout(() => {
      xBtn.classList.remove("glow");
    }, 300);
  } else if (event.key.toLowerCase() === "c") {
    audio9.currentTime = 0;
    audio9.play();
    cBtn.classList.add("glow");
    cBtn.classList.toggle("changeColor");
    setTimeout(() => {
      cBtn.classList.remove("glow");
    }, 300);
  }

  console.log(event.key);
});

//! kinuha niya lahat ng iisang class na key ang name
const keys = document.querySelectorAll(".key"), //! pressed
  note = document.querySelector(".nowplaying"), //! empty class ito sa html niya
  hints = document.querySelectorAll(".hints"); //! ito yung mga text

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  //! this will display text
  const keyNote = key.getAttribute("data-note"); //! note display
  //! this transforms the dom element through css
  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
