const request=require('request')
const urlModule=require('url')
const jsonModule=require('json-schema')

const forecast= (latitude,longitude,callback) => {
    const url='https://api.weatherstack.com/current?access_key=c3f0397fccb27977f0755c063e63929b&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error) {
            callback('Unable to connect to weather service',undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions+'.It is currently '+body.current.temperature+' degrees out. There is a '+body.current.precip+'% chance of rain.')
        }
    })
}


module.exports=forecast