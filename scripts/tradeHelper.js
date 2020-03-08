// Kate Keefe
// Trade Helper JavaScript for my Economics Class

// Change min of website by changing the --minW CSS variable
document.documentElement.style.setProperty('--minW', "300px")

/******************** Constants ********************/
var openLinksBtn = document.getElementById("openLinksBtn")
var stockName = document.getElementById("stockName")
var openStockBtn = document.getElementById("openStockBtn")
var shares = document.getElementById("shares")
var buy = document.getElementById("buyPrice")
var commission = document.getElementById("commission")
var profit = document.getElementById("profit")
var calculateBtn = document.getElementById("calculateBtn")
var sell = document.getElementById("sellPrice")

/******************** Calculate Min Price ********************/
// Calculate the minimum price for selling a stock
calculateBtn.onclick = function() {
    if (shares.value != "" && buy.value != "") {
        let x = parseInt(shares.value)
        sell.innerHTML = ((x * parseInt(buy.value)) + (parseFloat(commission.value) * 2) + parseFloat(profit.value)) / x
    }
    else
        sell.innerHTML = "---"
}

/******************** Open Multiple Links ********************/
// let allLinks = ["https://kmek.github.io/Portfolio/", "https://kmek.github.io/Economics7Principles/", "https://howthemarketworks.com"]
// function openTheTabs() {
//     for (let i = 0; i < allLinks.length; i++) {
//         console.log("opening! " + i)
//         window.open(allLinks[i], ("tab" + i), "")
//     }
// }

/******************** Open Yahoo Finance Stock Page ********************/
openStockBtn.onclick = function() {
    if (stockName.value != "")
        window.open("https://finance.yahoo.com/quote/" + stockName.value)
}

/******************** Using Stocks.js ********************/
// Alpha Vantage Key: SFQX2ZC92AYNKDLR
