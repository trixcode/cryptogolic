
export const fetchCurrencies = () => (
    fetch('http://api.coinlayer.com/list?access_key=fc5e423a6a532c93cb4b744989def1bc')
    .then(response => response.json())
    .then(jsonResponse => ({BTC: jsonResponse.crypto.BTC, ETH: jsonResponse.crypto.ETH}))
    .catch(error => error)
)
export const fetchCurrenciesLive = () => (
    fetch('http://api.coinlayer.com/live?access_key=fc5e423a6a532c93cb4b744989def1bc&symbols=BTC,ETH')
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .catch(error => error)
)
export const fetchCurrenciesHistorical = () => (
    fetch('http://api.coinlayer.com/2019-03-29?access_key=fc5e423a6a532c93cb4b744989def1bc&symbols=BTC,ETH')
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .catch(error => error)
)