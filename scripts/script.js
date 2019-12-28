window.addEventListener("keydown", playKey);

function playKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // this is a way of selecting the right key without hardcoding it, vry cool, how da heck do you do it..
    const allKeys = document.querySelectorAll(".key");

    if(!audio) {return;} //stops function from running

    key.classList.add("playing");
    allKeys.forEach(key => key.addEventListener("transitionend", removeTransition));

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") {return;} //dont do stuff if not transform yet

    this.classList.remove("playing");
}