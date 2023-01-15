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



        // function removeelement(){
        //     document.getElementById("imgbox1").style.display="none";
        // }
        // function changeVisibility(){
        //     document.getElementById("imgbox2").style.visibility="hidden";
        // }
        // function reset(){
        //     document.getElementById("imgbox1").style.display="inline";
        //     document.getElementById("imgbox2").style.visibility="visible";

        // }

function showp1(){
    document.getElementById("surec1").style.display="inline-block";
    document.getElementsById("surec2").style.display="none";
    document.getElementsById("surec3").style.display="none";
    document.getElementsById("surec4").style.display="none";
    document.getElementsById("surec5").style.display="none";
}

function showp2(){
    document.getElementsById("surec2").style.display="inline-block";
    document.getElementById("surec1").style.display="none";
    document.getElementsById("surec3").style.display="none";
    document.getElementsById("surec4").style.display="none";
    document.getElementsById("surec5").style.display="none";
}

function showp3(){
    document.getElementById("surec1").style.display="none";
    document.getElementsById("surec2").style.display="none";
    document.getElementsById("surec3").style.display="inline-block";
    document.getElementsById("surec4").style.display="none";
    document.getElementsById("surec5").style.display="none";
}

function showp4(){
    document.getElementById("surec1").style.display="none";
    document.getElementsById("surec2").style.display="none";
    document.getElementsById("surec3").style.display="none";
    document.getElementsById("surec4").style.display="inline-block";
    document.getElementsById("surec5").style.display="none";
}

function showp5(){
    document.getElementById("surec1").style.display="none";
    document.getElementsById("surec2").style.display="none";
    document.getElementsById("surec3").style.display="none";
    document.getElementsById("surec4").style.display="none";
    document.getElementsById("surec5").style.display="inline-block";
}