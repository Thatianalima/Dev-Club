const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectFirst = document.querySelector(".currency-select-first")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")
      console.log(currencySelect.value)
    const realToday = 1.0
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.26
    const bitcoinToday = 258.140


    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("cy-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("bitcoin", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if(currencySelect.value == "real1"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue/realToday)
    }

    if(currencySelect.value == "dolar1"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue/realToday)
    }
   

}

function changeCurrency() {
   

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameFirst = document.getElementById("currency-name-first")
    const currencyImageFirst = document.querySelector(".currency-img-first")

    if(currencySelectFirst.value == "real1"){
        currencyNameFirst.innerHTML = "Real Brasileiro"
        currencyImageFirst.src = "./assets/real.png"
    }
    if(currencySelectFirst.value == "dolar1"){
        currencyNameFirst.innerHTML = "Dólar Americano"
        currencyImageFirst.src = "./assets/dolar.png"
    }
    if(currencySelectFirst.value == "euro1"){
        currencyNameFirst.innerHTML = "Euro"
        currencyImageFirst.src = "./assets/euro.png"
    }
    if(currencySelectFirst.value == "libra1"){
        currencyNameFirst.innerHTML = "Libra"
        currencyImageFirst.src = "./assets/libra 1.png"
    }
    if(currencySelectFirst.value == "bitcoin1"){
        currencyNameFirst.innerHTML = "biticoin"
        currencyImageFirst.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }
    
    currencySelectFirst.value = currencySelect.value;
    convertValues();
}

currencySelectFirst.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);