
export function getEndpointCurrencyAmount(base_currency, endpoint_currency) {
    let response = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base_currency}.json`)
    let data = response.json()
    return data[`${endpoint_currency}`]
}