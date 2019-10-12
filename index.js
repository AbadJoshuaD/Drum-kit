var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var arrayOfAudios = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];
        var arrayOfButton = ["w", "a", "s", "d", "j", "k", "l"];
        click = this.innerHTML;
        audioIndex = arrayOfButton.indexOf(click);
        audioFileName = arrayOfAudios[audioIndex];
        var audio = new Audio('sounds/' + audioFileName);
        audio.play();
        buttonAnimation(click);
    })
}
document.addEventListener("keypress", function (event) {
        var arrayOfAudios = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];
        var arrayOfButton = ["w", "a", "s", "d", "j", "k", "l"];
        click = event.key;
        audioIndex = arrayOfButton.indexOf(click);
        audioFileName = arrayOfAudios[audioIndex];
        var audio = new Audio('sounds/' + audioFileName);
        audio.play();
        buttonAnimation(click);
});


function buttonAnimation(click){
    var activeButton= document.querySelector("."+click);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);

}
