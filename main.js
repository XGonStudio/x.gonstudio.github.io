// Прив'язка обробника подій для кнопки
document.querySelector('.STYLE_bg_change_button').addEventListener('click', function(event){
    event.preventDefault();  // Запобігає переходу за посиланням
    toggleBackground();  // Викликає функцію зміни фону
});

// Функція для перемикання кольору фону
function toggleBackground(){
    const body = document.querySelector('.STYLE_body');  // Знаходимо елемент body
    if (body.classList.contains('alt_body')) {
        body.classList.remove('alt_body');  // Видаляємо клас, щоб повернути початковий колір
    } else {
        body.classList.add('alt_body');  // Додаємо клас, щоб змінити колір
    }
}