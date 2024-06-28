let searchBtn = document.querySelector("#search-btn") 
let searchForm = document.querySelector(".search-form") 
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")

function showbar(){
    searchBtn.classList.toggle("fa-times") /* يعني تبديل  لايقونه الاكسtoggle */
    searchForm.classList.toggle("active")
}
function showform(){
    loginForm.classList.add("active")
}
function hideform(){
    loginForm.classList.remove("active")

}
function showmenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
 }

//     breakpoints:{  /*Control in responsive:الستجابه */
//         640:{/* عرض معين للشاشه*/ 
//             slidesPerView:1/* عرض شريحه وحده فقط*/
//         },
//         768:{
//             slidesPerView:2
//         },
//         1024:{
//             slidesPerView:3
//         }
//     }
// });