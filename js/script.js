const searchForm = document.querySelector(".search-form");


//!buttons//

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active")
})

document.addEventListener("click",function(e){
    if(!e.composedPath().includes(searchBtn)){
        searchForm.classList.remove("active")
    }
})

const searchCart = document.querySelector(".cart-items-container");

//buttons//

const searchBtnCard = document.querySelector("#shopping-btn")

searchBtnCard.addEventListener("click", function(){
    searchCart.classList.toggle("active")
})

