// Kate Keefe
// Trade Helper JavaScript for my Economics Class

// Change min of website by changing the --minW CSS variable
document.documentElement.style.setProperty('--minW', "300px")

/******************** Constants ********************/
var openLinksBtn = document.getElementById("openLinksBtn")
var stockSymbol = document.getElementById("stockSymbol")
var quoteStockBtn = document.getElementById("quoteStockBtn")
var recentPrice = document.getElementById("recentPrice")
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
// openStockBtn.onclick = function() {
//     if (stockSymbol.value != "")
//         window.open("https://finance.yahoo.com/quote/" + stockSymbol.value)
// }

/******************** Using Alpha Vantage ********************/
// Alpha Vantage Key: SFQX2ZC92AYNKDLR

var keys

// Function taken from https://github.com/prediqtiv/alpha-vantage-cookbook
function requestStock(symbol) {
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=1min&apikey=SFQX2ZC92AYNKDLR"

    const xhr = new XMLHttpRequest();
    xhr.open( 'GET', url, true );
    xhr.onerror = function( xhr ) { console.log( 'error:', xhr  ); };
    xhr.onprogress = function( xhr ) { console.log( 'bytes loaded:', xhr.loaded  ); }; /// or something
    xhr.onload = callback;
    xhr.send( null );

    function callback( xhr ) {
        let response, json;

        response = xhr.target.response;
        // divContents.innerText = response;

        json = JSON.parse( response );
        console.log(json)
        json = json["Time Series (1min)"] 

        // Get keys
        keys = []
        for (key in json)
            keys.push(key)

        // console.log( 'json', keys[0], json[keys[0]]["4. close"])

        // Set to recentPrice span
        recentPrice.innerHTML = json[keys[0]]["4. close"]
    }
}
// requestStock("AAPL");

// Call on quote button
quoteStockBtn.onclick = function() {
    if (stockSymbol.value != "")
        requestStock(stockSymbol.value)
}