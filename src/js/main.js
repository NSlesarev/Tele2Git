// переменные для модального окна
const buttonModal = document.querySelector(".promo_button")
const formModal = document.querySelector(".mod")


// переменные пк выбор города
const changeСity = document.querySelector(".header_city")
const tableCity = document.querySelector(".city-desctop")
const headerCity = document.querySelector(".header_city_city")

// переменные мобилки выбор города
const changeСityMobile = document.querySelector(".header_city")
const tableCityMobile = document.querySelector(".city-mobile")
const headerCityMobile = document.querySelector(".header_city_city")



const cityConfirmationModal = document.querySelector(".header-bar");
const confirmCityBtn = document.querySelector(".header-bar__options__yes");
const changeCityBtn = document.querySelector(".header-bar__options__change");
const modalBackground = document.querySelector(".background-color-modal");

// добавляет фон прозрачный 
setTimeout(() => {
    cityConfirmationModal.classList.toggle("visible");
    modalBackground.classList.add("visible");
  }, 150);

// кнопка да верно
confirmCityBtn.addEventListener("click",() =>{
    cityConfirmationModal.classList.toggle("visible");
    modalBackground.classList.remove("visible");
    tableCity.remove("visible");
})

// Кнопка изменить город
changeCityBtn.addEventListener("click",() =>{
    cityConfirmationModal.classList.toggle("visible");
    modalBackground.classList.remove("visible");
})


// для пк выбор города
changeСity.addEventListener("click",() => {
    tableCity.classList.toggle("visible")
})

tableCity.onclick = function(event){
tableCity.classList.remove("visible");
headerCity.innerHTML = event.target.innerHTML;
};


// для мобилки выбор города
changeСityMobile.addEventListener("click",() => {
    tableCityMobile.classList.toggle("visible")
})

tableCityMobile.onclick = function(event){
tableCityMobile.classList.remove("visible");
headerCityMobile.innerHTML = event.target.innerHTML;
};

// для пк
document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент поля ввода
    let phoneInput = document.getElementById('phoneD');
  
    // Устанавливаем маску для ввода
    phoneInput.addEventListener('input', function(e) {
      // Форматируем ввод номера телефона
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });

    // При клике на поле ввода номера, включаем код города
    phoneInput.addEventListener('focus', function(e) {
      if (!e.target.value.startsWith('+7')) {
        e.target.value = '+7';
      }
    });
});


// для мобилки
document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент поля ввода
    let phoneInput = document.getElementById('phonem');
  
    // Устанавливаем маску для ввода
    phoneInput.addEventListener('input', function(e) {
      // Форматируем ввод номера телефона
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });

    // При клике на поле ввода номера, включаем код города
    phoneInput.addEventListener('focus', function(e) {
      if (!e.target.value.startsWith('+7')) {
        e.target.value = '+7';
      }
    });
});

// для модул
document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент поля ввода
    let phoneInput = document.getElementById('phone');
  
    // Устанавливаем маску для ввода
    phoneInput.addEventListener('input', function(e) {
      // Форматируем ввод номера телефона
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });

    // При клике на поле ввода номера, включаем код города
    phoneInput.addEventListener('focus', function(e) {
      if (!e.target.value.startsWith('+7')) {
        e.target.value = '+7';
      }
    });
});


// Добавляем обработчик события на клик по кнопке
buttonModal.addEventListener('click', function() {
  // Добавляем класс .visible, чтобы показать форму
  formModal.classList.add('visible');
})