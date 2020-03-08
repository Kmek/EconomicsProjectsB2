// Kate Keefe
// Trade Helper JavaScript for my Economics Class

// Change min of website by changing the --minW CSS variable
document.documentElement.style.setProperty('--minW', "300px")

/******************** Constants ********************/
var openLinksBtn = document.getElementById("openLinksBtn")
var shares = document.getElementById("shares")
var buy = document.getElementById("buyPrice")
var commission = document.getElementById("commission")
var profit = document.getElementById("profit")
var calculateBtn = document.getElementById("calculateBtn")
var sell = document.getElementById("sellPrice")
var iframe = document.getElementById("iframe")

/******************** Calculate Min Price ********************/
// Calculate the minimum price for selling a stock
calculateBtn.onclick = function() {
    if (shares.value != "" && buy.value != "") {
        let x = parseInt(shares.value)
        sell.innerHTML = ((x * parseInt(buy.value)) + (parseFloat(commission.value) * 2) + parseFloat(profit.value)) / x
    }
}

/******************** Open Multiple Links ********************/
// let allLinks = ["https://kmek.github.io/Portfolio/", "https://kmek.github.io/Economics7Principles/", "https://howthemarketworks.com"]
// function openTheTabs() {
//     for (let i = 0; i < allLinks.length; i++) {
//         console.log("opening! " + i)
//         window.open(allLinks[i], ("tab" + i), "")
//     }
// }

function test(stockName) {
    // let link = window.open("https://finance.yahoo.com/quote/" + stockName)
    // console.log(link)
    // console.log(link.location)
    iframe.setAttribute("src", "https://finance.yahoo.com/quote/" + stockName)
}

/******************** Using Stocks.js ********************/
// Alpha Vantage Key: SFQX2ZC92AYNKDLR
