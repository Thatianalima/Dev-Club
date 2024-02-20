const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectFirst = document.querySelector(".currency-select-first")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
   
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.26
    const bitcoinToday = 258.140

    if (currencySelectFirst.value == "real-fir") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "dolar-fir") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "euro-fir") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectFirst.value == "libra-fir") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (currencySelectFirst.value == "bitcoin-fir") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
  
    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    }

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") { //Se a libra estiver selecionada entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") { //Se o bitcoin estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectFirst.value == "dolar-fir" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "dolar-fir" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelectFirst.value == "dolar-fir" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.92)
    }

    if (currencySelectFirst.value == "dolar-fir" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.79)
    }

    if (currencySelectFirst.value == "dolar-fir" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000026)
    }
    if (currencySelectFirst.value == "euro-fir" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "euro-fir" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelectFirst.value == "euro-fir" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.09)
    }

    if (currencySelectFirst.value == "euro-fir" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.86)
    }

    if (currencySelectFirst.value == "euro-fir" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000028)
    }

    if (currencySelectFirst.value == "libra-fir" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "libra-fir" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelectFirst.value == "libra-fir" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.26)
    }

    if (currencySelectFirst.value == "libra-fir" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.16)
    }

    if (currencySelectFirst.value == "libra-fir                                                                                                                                                                                                                                                                                                                                                                           " && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000033)
    }
    if (currencySelectFirst.value == "bitcoin-fir" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFirst.value == "bitcoin-fir" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currencySelectFirst.value == "bitcoin-fir" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 38323.60)
    }

    if (currencySelectFirst.value == "bitcoin-fir" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 35342.41)
    }

    if (currencySelectFirst.value == "bitcoin-fir" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 30378.54)
    }


}

function changeCurrency() {   
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
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

function changeCurrencyTop() {
    const currency = document.querySelector(".currency")
    const currencyTopImg = document.querySelector(".currency-img-first")

    if (currencySelectFirst.value == "real-fir") {
        currency.innerHTML = "Real"
        currencyTopImg.src = "./assets/real.png"
    }

    if (currencySelectFirst.value == "dolar-fir") {
        currency.innerHTML = "Dólar Americano"
        currencyTopImg.src = "./assets/dolar.png"
    }

    if (currencySelectFirst.value == "euro-fir") {
        currency.innerHTML = "Euro"
        currencyTopImg.src = "./assets/euro.png"
    }

    if (currencySelectFirst.value == "libra-fir") {
        currency.innerHTML = "Libra"
        currencyTopImg.src = "./assets/libra 1.png"
    }

    if (currencySelectFirst.value == "bitcoin-fir") {
        currency.innerHTML = "Bitcoin"
        currencyTopImg.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelectFirst.addEventListener("change", changeCurrencyTop);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);