const searchForm = document.querySelector(".search-form");


//!buttons//

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active")
})

document.addEventListener("click", function (e) {
    if (
        !e.composedPath().includes(searchBtn) &&
        !e.composedPath().includes(searchForm)) {
        searchForm.classList.remove("active")
    }
})



//buttons//



const cartItem = document.querySelector(".cart-items-container");
const shoppingBtn = document.querySelector("#shopping-btn");

shoppingBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active")
})

document.addEventListener("click", function (e) {
    if (
        !e.composedPath().includes(shoppingBtn) &&
        !e.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active")
    }
})


const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active")
})


//süreçler//
const surecler = document.querySelector("#surecler");


const surecb1 = document.querySelector("#surecb1");
const surec1 = document.querySelector("#surec1");
surecb1.addEventListener("click", function(){
    surec1.classList.toggle("active")
} )


const surecb2 = document.querySelector("#surecb2");
const surec2 = document.querySelector("#surec2");
surecb2.addEventListener("click", function(){
    surec2.classList.toggle("active")
} )

const surecb3 = document.querySelector("#surecb3");
const surec3 = document.querySelector("#surec3");
surecb3.addEventListener("click", function(){
    surec3.classList.toggle("active")
} )


const surecb4 = document.querySelector("#surecb4");
const surec4 = document.querySelector("#surec4");
surecb4.addEventListener("click", function(){
    surec4.classList.toggle("active")
} )


const surecb5 = document.querySelector("#surecb5");
const surec5 = document.querySelector("#surec5");
surecb5.addEventListener("click", function(){
    surec5.classList.toggle("active")
} )


