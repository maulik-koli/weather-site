const request = require('request')

const forcast = (longitude,latitude, callback) =>{
    const weatherUrl = "http://api.weatherstack.com/current?access_key=8d00869e68fb4731bc46657a899b42eb&query=" + latitude + "," + longitude

    request({ url : weatherUrl, json : true}, (error, {body} = {}) =>{
        if(error){
            callback("Internet connetion is not connected", undefined)
        }
        else if(body.error){
            callback("Uable to find location", undefined)
        }
        else{
            callback(undefined , {
                temperature: body.current.temperature,
                location: body.location.name,
                description: body.current.weather_descriptions
            })
        }
    })
}

module.exports = forcast