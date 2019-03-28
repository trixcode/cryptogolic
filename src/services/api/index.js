
export const fetchCurrencies = () => (
    fetch('http://api.coinlayer.com/list?access_key=fc5e423a6a532c93cb4b744989def1bc')
        .then(response => response.json())
        .then(jsonResponse => {
            const coins = {
                BTC: jsonResponse.crypto.BTC,
                ETH: jsonResponse.crypto.ETH,
                XRP: jsonResponse.crypto.XRP,
                EOS: jsonResponse.crypto.EOS
            }
            return coins;
        })
        .catch(error => error)
)

export const fetchLive = () => (
    fetch('http://api.coinlayer.com/live?access_key=fc5e423a6a532c93cb4b744989def1bc')
        .then(response => response.json())
        .then(jsonResponse => jsonResponse)
        .catch(error => error)
)

export const fetchConvert = () => (
    fetch('http://api.coinlayer.com/convert?access_key=YOUR_ACCESS_KEY&from=BTC&to=ETH&amount=10')
        .then(response => response.json())
        .then(jsonResponse => jsonResponse)
        .catch(error => error)
)

export const fetchData = () => (
    fetch('http://api.coinlayer.com/2019-03-28?access_key=YOUR_ACCESS_KEY')
        .then(response => response.json())
        .then(jsonResponse => jsonResponse)
        .catch(error => error)
)
