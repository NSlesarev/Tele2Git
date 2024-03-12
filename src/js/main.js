// переменные пк выбор города
const changeСity = document.querySelector(".header_city")
const tableCity = document.querySelector(".city-desctop")
const headerCity = document.querySelector(".header_city_city")

// переменные мобилки выбор города
const changeСityMobile = document.querySelector(".header_city")
const tableCityMobile = document.querySelector(".city-mobile")
const headerCityMobile = document.querySelector(".header_city_city")



const cityConfirmationModal = document.querySelector(".header-planka");
const confirmCityBtn = document.querySelector(".header-planka__options__yes");
const changeCityBtn = document.querySelector(".header-planka__options__change");
const currentCitySpan = document.getElementById("currentCity");
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
// body.classList.remove("modal-open");
headerCity.innerHTML = event.target.innerHTML;
};


// для мобилки выбор города
changeСityMobile.addEventListener("click",() => {
    tableCityMobile.classList.toggle("visible")
})

tableCityMobile.onclick = function(event){
tableCityMobile.classList.remove("visible");
// body.classList.remove("modal-open");
headerCityMobile.innerHTML = event.target.innerHTML;
};










