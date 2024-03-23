//const { endAsyncEvent } = require("react-native/Libraries/Performance/Systrace");

async function getEndpointCurrencyAmount(base_currency, endpoint_currency) {
    var response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base_currency}.json`)
    var data = await response.json()
    data = JSON.parse(data)
    return data[`${base_currency}`][`${endpoint_currency}`];

}


var base_currency = "eth";
var endpoint_currency = "rub";
var amount = getEndpointCurrencyAmount(base_currency, endpoint_currency)
console.log(amount)