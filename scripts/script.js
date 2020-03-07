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

// Load Info of Page into #page div
function loadPage(info) {
    page.height = "100%"
    // page.height = "0"
    // page.overflow = "auto"
    // page.innerHTML = ""

    // let title = document.createElement("h2")
    // title.innerHTML = info.title
    // title.setAttribute("class", "transition")
    // page.appendChild(title)

    // let img = document.createElement("img")
    // img.setAttribute("src", info.img)
    // page.appendChild(img)

    page.children[0].innerHTML = info.title

    page.children[1].setAttribute("src", info.img)

    changeAccent(info.color)
}