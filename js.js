/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert("'Задача специалиста по тестированию — выявить все проблемы, которые могут возникнуть при работе с продуктом, и сделать все возможное для улучшения его качества.'(Сэм Канер, Тестирование ПО)")
})
