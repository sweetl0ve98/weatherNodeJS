const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=39f9b63d0b12c03f3c5244d251567d7c&query=${latitude},${longitude}`;
    console.log("🚀 ~ file: forecast.js ~ line 5 ~ forecast ~ url", url)

    request({ url: url, json: true }, (error, {body: { error: responseError, current } }) => {
        if (error) {
            callback('Network error', undefined)
        } else if (responseError) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: current.temperature,
                precip: current.precip
            })
        }
    })
}

module.exports = forecast