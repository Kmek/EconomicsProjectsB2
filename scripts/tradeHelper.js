// Kate Keefe
// Trade Helper JavaScript for my Economics Class

// Change min of website by changing the --minW CSS variable
document.documentElement.style.setProperty('--minW', "300px")

// Constants
var openLinksBtn = document.getElementById("openLinksBtn")
var shares = document.getElementById("shares")
var buy = document.getElementById("buyPrice")
var commission = document.getElementById("commission")
var profit = document.getElementById("profit")
var calculateBtn = document.getElementById("calculateBtn")
var sell = document.getElementById("sellPrice")

// Calculate the minimum price for selling a stock
calculateBtn.onclick = function() {
    if (shares.value != "" && buy.value != "") {
        let x = parseInt(shares.value)
        sell.innerHTML = ((x * parseInt(buy.value)) + (parseFloat(commission.value) * 2) + parseFloat(profit.value)) / x
    }
}