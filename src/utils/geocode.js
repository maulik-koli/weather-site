const request = require('request')

const geocode = (address, callback) => {
    const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoibWF1bGlrLWtvbGkiLCJhIjoiY2x4dTNtMTRrMjIyZzJqc2VldTg2NG16dSJ9.hewyt4s-2H6hhw_RAYMk4A&limit=1"

    request({url : mapURL, json : true}, (error, { body } = {} ) => {
        if(error){
            callback("Internet connetion is not connected", undefined)
        }
        else if(body.features.length === 0){
            callback("Unable to find location", undefined)
        }
        else{
            callback(undefined, {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode