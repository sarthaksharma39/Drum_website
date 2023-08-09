

var NoOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < NoOfBtn; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var btninnerHTML = this.innerHTML;
        Sound(btninnerHTML);
    });
}

function Sound(key) {
    switch (key) {
        case 'a':
            var audio = new Audio("sounds/2.wav");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/2.wav");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/4.wav");
            audio.play();
            break;
        case 'f':
            var audio = new Audio("sounds/5.wav");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/6.wav");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/7.wav");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/8.mp3");
            audio.play();
            break;
        case ';':
            var audio = new Audio("sounds/1.wav");
            audio.play();
            break;
        default:
            console.log(btninnerHTML);
    }
}

document.addEventListener("keypress", function (event) {
    Sound(event.key);
});
