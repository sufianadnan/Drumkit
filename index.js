const keyAudioMap = {
    w: 'tom-1.mp3',
    a: 'tom-2.mp3',
    s: 'tom-3.mp3',
    d: 'tom-4.mp3',
    j: 'snare.mp3',
    k: 'crash.mp3',
    l: 'kick-bass.mp3'
  };
  
  document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
      const buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
      console.log(`Button ${buttonInnerHTML} was clicked.`);
    });
  });
  
  document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    if (keyAudioMap[key]) {
      makeSound(key);
      buttonAnimation(key);
      console.log(`Key ${key} on the keyboard was pressed.`);
    }
  });
  
  function makeSound(key) {
    const audioPath = keyAudioMap[key];
    if (audioPath) {
      const audio = new Audio(`sounds/${audioPath}`);
      audio.play();
    }
  }
  
  function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
  