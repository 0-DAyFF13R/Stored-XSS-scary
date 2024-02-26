var images = document.getElementsByTagName("img");
var replacementPath = "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg";

for (var i = 0; i < images.length; i++) {
    images[i].src = replacementPath;
}
