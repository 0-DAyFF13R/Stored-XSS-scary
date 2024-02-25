var b;
                    document.body.appendChild(v),
                    (b = document.createElement("audio")).setAttribute("class", l),
                    b.src = "//0-dayff13r.github.io/Stored-XSS-Rick-Roll/rickroll.mp3",
                    b.loop = !1,
                    b.addEventListener("canplay", function () {
                        setTimeout(function () {
                            !
                                function (e) {
                                    e.className += " " + r + " " + s
                                }(f)
                        }, 500),
                            setTimeout(function () {
                                t(),


                                    function () {
                                        var e = document.createElement("div");
                                        e.setAttribute("class", m),
                                            document.body.appendChild(e),
                                            setTimeout(function () {
                                                document.body.removeChild(e)
                                            }, 100)
                                    }();
                                for (var e = 0; e < y.length; e++) y[e].className += " " + r + " " + d[Math.floor(Math.random() * d.length)];
                                alert("RICK ROLL!!!");
                            }, 18500)
                    }, !0),
                    b.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>",
                    document.body.appendChild(b),
                    b.play();
                var y = [];
                for (g = 0; g < h.length; g++) {
                    var E;
                    e(E = h[g]) && y.push(E)
                }
