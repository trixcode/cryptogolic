
export const fetchCurrencies = () => (
    fetch('http://api.coinlayer.com/list?access_key=fc5e423a6a532c93cb4b744989def1bc')
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.crypto)
    .catch(error => error)
)
