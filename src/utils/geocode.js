const request=require('request')
const urlModule=require('url')
const jsonModule=require('json-schema')


const geocode=function (address,callback) {
    const url='https://api.maptiler.com/geocoding/+'+encodeURIComponent(address)+'.json?key=HWDc4CseNrJRvXKez5yv'
    request({url,json:true},(error,{body})=>{
        if(error) {
            callback('Unable to connect to location services',undefined)
        } else if(body.features.length===0) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name,
            })
        }
    })
}

module.exports=geocode