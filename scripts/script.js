// JavaScript for Economic Systems Website

// Constants
// var page = document.getElementById("page")
var page = document.getElementById("pageLayout")

/******************** Change Accent Color ********************/
// Print Color
// console.log(getComputedStyle(document.body).getPropertyValue('--accent'))

function changeAccent(color) {
    document.documentElement.style.setProperty('--accent', color)
}
// Change color of page
changeAccent("#3e2282")